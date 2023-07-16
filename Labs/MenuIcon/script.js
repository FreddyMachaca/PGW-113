const menuIcon = document.getElementById("menuIcon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  menu.classList.toggle("open");
});
