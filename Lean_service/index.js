//Burguer menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

//Dropdown 1 - "Servicios"
const dropMenu = document.querySelector(".drop__menu");
const dropDown1 = document.querySelector(".dropdown1");
const dropArrow = document.querySelector(".nav__arrowDrop");

//Dropdown 2.1 - "Facility"
const dropDown2 = document.querySelector(".nav__dropdown2");
const dropMenu2 = document.querySelector(".drop__menu2");
const dropArrowF = document.querySelector(".nav__arrowDropF");

//Dropdown 2.2 - "Consulting"
const dropDown3 = document.querySelector(".nav__dropdown2C");
const dropMenu3 = document.querySelector(".drop__menu2C");
const dropArrowC = document.querySelector(".nav__arrowDropC");

//Codigo

//Burguer menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  //Desactivar otros menús
  dropArrow.classList.remove("active");
  dropMenu.classList.remove("active");
  dropArrowF.classList.remove("active");
  dropMenu2.classList.remove("active");
  dropMenu3.classList.remove("active");
  dropArrowC.classList.remove("active");
});

//Dropdown 1 "Servicios"
dropDown1.addEventListener("click", () => {
  dropArrow.classList.toggle("active");
  dropMenu.classList.toggle("active");

  //Desactivar otros menús
  dropArrowF.classList.remove("active");
  dropMenu2.classList.remove("active");
  dropMenu3.classList.remove("active");
  dropArrowC.classList.remove("active");
});

//Dropdown 2 "Facility"
dropDown2.addEventListener("click", () => {
  dropArrowF.classList.toggle("active");
  dropMenu2.classList.toggle("active");

  //Desactivar otros menús
  dropArrowC.classList.remove("active");
  dropMenu3.classList.remove("active");
});

//Dropdown 4 "Consulting"
dropDown3.addEventListener("click", () => {
  dropArrowC.classList.toggle("active");
  dropMenu3.classList.toggle("active");

  //Desactivar otros menús
  dropArrowF.classList.remove("active");
  dropMenu2.classList.remove("active");
});
