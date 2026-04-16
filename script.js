function toggleDetails(button) {
  const details = button.nextElementSibling;
  details.style.display = details.style.display === "block" ? "none" : "block";
}