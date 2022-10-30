import "../scss/index.scss";

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

var menu = ["INTRO", "WORK", "ABOUT", "CONTACTS"];

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '\
          <div class="box ' +
        className +
        '">\
          <div class="bigNumber">' +
        (index < 10 ? "0" + (index + 1) : index + 1) +
        '</div>\
          <div class="text">' +
        menu[index] +
        "</div>\
          </div>"
      );
    },
  },
});

// const swiper = new Swiper(".swiper", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 150 + "px";
    }
  });
}

import "./demo.js";
