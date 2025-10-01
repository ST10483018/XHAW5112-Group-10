console.log("✅ script.js is connected!");

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const optionsContainer = document.getElementById("options");
  const selectedTags = document.getElementById("selectedTags");
  const totalFeeDisplay = document.getElementById("totalFee");

  let totalFee = 0;

  dropdownToggle.addEventListener("click", () => {
    optionsContainer.classList.toggle("show");
  });

  document.querySelectorAll("#options div").forEach(option => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value");
      const price = parseInt(option.getAttribute("data-price"));

      // Prevent duplicate tags
      if (selectedTags.querySelector(`[data-value="${value}"]`)) return;

      // Create tag
      const tag = document.createElement("div");
      tag.classList.add("tag");
      tag.setAttribute("data-value", value);
      tag.setAttribute("data-price", price);
      tag.textContent = `${value}`;

      // Remove button
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove");
      removeBtn.innerHTML = "×";

      removeBtn.addEventListener("click", () => {
        selectedTags.removeChild(tag);
        totalFee -= price;
        updateTotal();
      });

      tag.appendChild(removeBtn);
      selectedTags.appendChild(tag);

      totalFee += price;
      updateTotal();
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      optionsContainer.classList.remove("show");
    }
  });

  function updateTotal() {
    totalFeeDisplay.textContent = `Total Fee: R${totalFee}`;
  }
});
