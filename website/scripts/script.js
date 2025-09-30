// script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("navigation.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(err => console.error("Failed to load navbar:", err));
});
