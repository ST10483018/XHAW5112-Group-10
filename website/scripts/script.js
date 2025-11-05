document.addEventListener("DOMContentLoaded", () => {
  const student = JSON.parse(localStorage.getItem("studentData"));

  const nameEl = document.getElementById("studentName");
  const surnameEl = document.getElementById("studentSurname");
  const numberEl = document.getElementById("studentNumber");
  const statusEl = document.getElementById("statusText");
  const messageEl = document.getElementById("statusMessage");
  const courseRowsEl = document.getElementById("courseRows");
  const amountBoxEl = document.getElementById("amountBox");

  // --- UPDATES PAGE ---
  if (nameEl && surnameEl && numberEl && statusEl && messageEl && courseRowsEl && amountBoxEl) {
    if (!student) {
      nameEl.textContent = "No student data found.";
      return;
    }

    nameEl.textContent = student.name;
    surnameEl.textContent = student.surname;
    numberEl.textContent = student.studentNumber;
    statusEl.textContent = student.status;
    messageEl.textContent = student.message;

    courseRowsEl.innerHTML = student.courses
      .map(course => `
        <div class="table-row">
          <span>${course.name}</span>
          <span>${course.startDate}</span>
        </div>
      `)
      .join("");

    //  Show fee breakdown
    amountBoxEl.innerHTML = `
      <div class="amount-row"><span>Subtotal</span><span>R${student.subtotal}</span></div>
      <div class="amount-row"><span>Discount (${student.discountPercentage}%)</span><span>-R${student.discount}</span></div>
      <div class="amount-row"><span>VAT (15%)</span><span>R${student.vat}</span></div>
      <div class="amount-row total"><span>Total Due</span><span>${student.totalFee}</span></div>
    `;
    return;
  }

  // --- ADMISSIONS PAGE ---
  const dropdownToggle = document.getElementById("dropdownToggle");
  const optionsContainer = document.getElementById("options");
  const selectedTags = document.getElementById("selectedTags");
  const totalFeeDisplay = document.getElementById("totalFee");
  const form = document.querySelector("form");

  let selectedCourses = [];

  dropdownToggle.addEventListener("click", () => {
    optionsContainer.classList.toggle("show");
  });

  document.querySelectorAll("#options div").forEach(option => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value");
      const price = parseInt(option.getAttribute("data-price"));

      if (selectedCourses.find(c => c.value === value)) return;

      selectedCourses.push({ value, price });

      const tag = document.createElement("div");
      tag.classList.add("tag");
      tag.textContent = value;

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove");
      removeBtn.innerHTML = "×";

      removeBtn.addEventListener("click", () => {
        selectedTags.removeChild(tag);
        selectedCourses = selectedCourses.filter(c => c.value !== value);
        updateTotal();
      });

      tag.appendChild(removeBtn);
      selectedTags.appendChild(tag);

      updateTotal();
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      optionsContainer.classList.remove("show");
    }
  });

  function updateTotal() {
    const subtotal = selectedCourses.reduce((sum, c) => sum + c.price, 0);

    let discountPercentage = 0;
    if (selectedCourses.length === 2) discountPercentage = 5;
    if (selectedCourses.length === 3) discountPercentage = 10;
    if (selectedCourses.length > 3) discountPercentage = 15;

    const discount = subtotal * (discountPercentage / 100);
    const vat = (subtotal - discount) * 0.15;
    const total = subtotal - discount + vat;

    totalFeeDisplay.textContent = `Total Fee (incl. VAT): R${total.toFixed(2)}`;
    totalFeeDisplay.dataset.subtotal = subtotal;
    totalFeeDisplay.dataset.discount = discount.toFixed(2);
    totalFeeDisplay.dataset.discountPercentage = discountPercentage;
    totalFeeDisplay.dataset.vat = vat.toFixed(2);
    totalFeeDisplay.dataset.total = total.toFixed(2);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    const values = Array.from(inputs).map(input => input.value.trim());

    if (values.some(v => v === "") || selectedCourses.length === 0) {
      alert("Please fill in all fields and select at least one course.");
      return;
    }

    const [name, surname, email, password, id, address] = values;

    const courseStartDates = {
      Sewing: "8th February 2026",
      "First Aid": "27th March 2026",
      Landscaping: "8th February 2026",
      "Life Skills": "10th March 2026",
      "Garden Maintenance": "15th March 2026",
      Cooking: "27th March 2026",
      "Child Minding": "5th April 2026",
    };

    const selectedCourseList = selectedCourses.map(course => ({
      name: course.value,
      startDate: courseStartDates[course.value] || "TBA",
      price: course.price,
    }));

    const studentData = {
      name,
      surname,
      studentNumber: Math.floor(Math.random() * 90000000 + 10000000).toString(),
      courses: selectedCourseList,
      subtotal: totalFeeDisplay.dataset.subtotal,
      discount: totalFeeDisplay.dataset.discount,
      discountPercentage: totalFeeDisplay.dataset.discountPercentage,
      vat: totalFeeDisplay.dataset.vat,
      totalFee: `R${totalFeeDisplay.dataset.total}`,
      status: "Pending",
      message: "Your application is currently being processed. Look out for updates on here soon.",
    };

    localStorage.setItem("studentData", JSON.stringify(studentData));
    alert("Application submitted!");
    window.location.href = "updates.html";
  });
});
