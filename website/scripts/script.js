document.addEventListener("DOMContentLoaded", () => {
  
  const student = JSON.parse(localStorage.getItem("studentData"));

  const nameEl = document.getElementById("studentName");
  const surnameEl = document.getElementById("studentSurname");
  const numberEl = document.getElementById("studentNumber");
  const statusEl = document.getElementById("statusText");
  const messageEl = document.getElementById("statusMessage");
  const courseRowsEl = document.getElementById("courseRows");
  const amountBoxEl = document.getElementById("amountBox");

  if (nameEl && surnameEl && numberEl && statusEl && messageEl && courseRowsEl && amountBoxEl) {
    if (!student) {
      nameEl.textContent = "No student data found.";
      return;
    }

    // Populate student details
    nameEl.textContent = student.name;
    surnameEl.textContent = student.surname;
    numberEl.textContent = student.studentNumber;

    // Academic status
    statusEl.textContent = student.status;
    messageEl.textContent = student.message;

    // Course list
    courseRowsEl.innerHTML = student.courses
      .map(course => `
        <div class="table-row">
          <span>${course.name}</span>
          <span>${course.startDate}</span>
        </div>
      `)
      .join("");

    // Amount due
    let total = 0;
    amountBoxEl.innerHTML = student.courses
      .map(course => {
        total += course.price;
        return `<div class="amount-row"><span>${course.name}</span><span>R${course.price}</span></div>`;
      })
      .join("");
    amountBoxEl.innerHTML += `<div class="amount-row total"><span>Total</span><span>R${total}</span></div>`;

    return; // Skip form logic on updates.html
  }

  // Continue with form and dropdown logic (admission.html)
  const dropdownToggle = document.getElementById("dropdownToggle");
  const optionsContainer = document.getElementById("options");
  const selectedTags = document.getElementById("selectedTags");
  const totalFeeDisplay = document.getElementById("totalFee");
  const form = document.querySelector("form");

  let totalFee = 0;
  let selectedCourses = [];

  dropdownToggle.addEventListener("click", () => {
    optionsContainer.classList.toggle("show");
  });

  document.querySelectorAll("#options div").forEach(option => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value");
      const price = parseInt(option.getAttribute("data-price"));

      if (selectedCourses.includes(value)) return;

      selectedCourses.push(value);

      const tag = document.createElement("div");
      tag.classList.add("tag");
      tag.setAttribute("data-value", value);
      tag.setAttribute("data-price", price);
      tag.textContent = value;

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove");
      removeBtn.innerHTML = "×";

      removeBtn.addEventListener("click", () => {
        selectedTags.removeChild(tag);
        selectedCourses = selectedCourses.filter(c => c !== value);
        totalFee -= price;
        updateTotal();
      });

      tag.appendChild(removeBtn);
      selectedTags.appendChild(tag);

      totalFee += price;
      updateTotal();
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      optionsContainer.classList.remove("show");
    }
  });

  function updateTotal() {
    totalFeeDisplay.textContent = `Total Fee: R${totalFee}`;
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
      name: course,
      startDate: courseStartDates[course] || "TBA",
      price: parseInt(
        document.querySelector(`[data-value="${course}"]`).getAttribute("data-price")
      ),
    }));

    const studentData = {
      name,
      surname,
      studentNumber: Math.floor(Math.random() * 90000000 + 10000000).toString(),
      courses: selectedCourseList,
      totalFee: `R${totalFee}`,
      status: "Pending",
      message: "Your application is currently being processed. Look out for updates on here soon.",
    };

    localStorage.setItem("studentData", JSON.stringify(studentData));
    alert("Application submitted!");
    window.location.href = "updates.html";
  });
});
