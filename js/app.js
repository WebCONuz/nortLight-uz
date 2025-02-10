const menuContent = document.querySelector(".header .container.top");
const openBtn = document.querySelector(".header__bar");
const closeBtn = document.querySelector(".header__x");

openBtn.addEventListener("click", function () {
  menuContent.classList.add("opened");
});

closeBtn.addEventListener("click", function () {
  menuContent.classList.remove("opened");
});

// open modal
const authModal = document.querySelector(".modal");
authModal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    authModal.classList.remove("open");
  }
});
const profileBtn = document.querySelector(".header__details.two");
profileBtn.addEventListener("click", function () {
  authModal.classList.add("open");
});
const closeModalBtn = document.querySelector(".modal__content i");
closeModalBtn.addEventListener("click", function () {
  authModal.classList.remove("open");
});
const authModalForm = document.querySelector(".modal__form");
authModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Data is sended");
  // authModal.classList.remove("open");
});
