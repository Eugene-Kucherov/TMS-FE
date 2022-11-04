const burgerButton = document.querySelector(".menu-btn");
const mobileNavigation = document.querySelector(".navigation-mobile");

burgerButton.addEventListener("click", () => {
  if (mobileNavigation.classList.contains("opened")) {
    mobileNavigation.classList.remove("opened");
  } else {
    mobileNavigation.classList.add("opened");
  }
});
