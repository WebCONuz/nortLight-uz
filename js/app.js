const menuContent = document.querySelector(".header .container.top");
const openBtn = document.querySelector(".header__bar");
const closeBtn = document.querySelector(".header__x");

openBtn.addEventListener("click", function () {
  menuContent.classList.add("opened");
});

closeBtn.addEventListener("click", function () {
  menuContent.classList.remove("opened");
});
