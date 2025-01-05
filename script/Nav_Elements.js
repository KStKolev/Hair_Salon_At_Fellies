const navButton = document.querySelector(".list-toggle");

navButton.addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("active");
  document.querySelector(".list-toggle").classList.toggle("active");
});
