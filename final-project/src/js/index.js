//loader
window.addEventListener("load", (event) => {
  const loader = document.querySelector(".loader-screen");
  loader.classList.add("hidden");
});

// бургер
const menuBtn = document.querySelector(".menu-btn");
const mobileNavigation = document.querySelector(".navigation-mobile");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    mobileNavigation.classList.add("opened");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    mobileNavigation.classList.remove("opened");
  }
});

// главный слайдер
var menu = ["INTRO", "WORK", "ABOUT", "CONTACTS"];

const swiper = new Swiper(".swiper-main", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".main-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '\
          <div class="box main-pagination-bullet ' +
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

// слайдер отзывов
const swiper1 = new Swiper(".review-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".review-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// аккодреон
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
