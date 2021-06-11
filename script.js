const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

function openMenu() {
  navMenu.classList.add("is-active");
  menuCloseButton.classList.add("is-active");
}

function closeMenu() {
  navMenu.classList.remove("is-active");
  menuCloseButton.classList.remove("is-active");
}

menuButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);
