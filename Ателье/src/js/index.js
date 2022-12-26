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

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1025: {
      slidesPerView: 3,
    },
    641: {
      slidesPerView: 2,
    },
  },
});
