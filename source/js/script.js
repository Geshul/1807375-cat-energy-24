const navMain = document.querySelector(".main-navigation");
const navToggle = document.querySelector(".main-navigation__toggle");
const headerMain = document.querySelector(".page-header");

navMain.classList.remove("main-navigation--nojs");
headerMain.classList.remove("page-header--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});
