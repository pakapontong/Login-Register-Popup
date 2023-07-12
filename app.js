const wrapper = document.querySelector(".wrapper");
const btnPopup = document.querySelector(".btn-loginPopup");
const iconClose = document.querySelector(".icon-close");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
})

loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
})

iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
})

btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
})