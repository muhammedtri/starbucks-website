const menuButton = document.getElementById("menu-button")
const navbarLeft = document.querySelector(".navbar-nav-left")
const menuMobile = document.querySelector(".mobile-menu")
function toggleMenu() {
  menuButton.classList.toggle("open")
  menuMobile.classList.toggle("show")
}

menuButton.addEventListener("click", toggleMenu)
