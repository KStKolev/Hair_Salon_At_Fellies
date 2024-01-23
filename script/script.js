const navbar = document.querySelector(".nav-display");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (lastScrollY > currentScrollY) {
    navbar.classList.add("nav-hidden");
  } else {
    navbar.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
});
