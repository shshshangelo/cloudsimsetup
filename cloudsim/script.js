document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", function () {
    this.nextElementSibling.style.display =
      this.nextElementSibling.style.display === "block" ? "none" : "block";
  });
});
