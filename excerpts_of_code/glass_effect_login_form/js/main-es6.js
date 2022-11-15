const loginForm = document.querySelector(".login-form__wrapper");
const resetPas = document.querySelector(".reset-pas__wrapper");

const inputEmail = document.querySelector(".login-form__input-email");
const inputResetPasEmail = document.querySelector(".reset-pas__input-email");

const inputPass = document.querySelector("#form__pass");
const inputPassShow = document.querySelector("#form__pass-show");

const linkForgotPass = document.querySelector("#form__reset-pass");
const resetBackButton = document.querySelector(".reset-pas__button-back");
//Переменная для хранения почты и передачи между формами
let email = '';

//Функция переключение между формой входа и восстановления пароля 
const switchLoginResetPassHandler = (event) => {
    event.preventDefault();
    resetPas.classList.toggle("disable");
    inputEmail.value = email;
    loginForm.classList.toggle("disable");
    inputResetPasEmail.value = email;
}

//Функция для сохранения почты
const saveEmailHandler = (event) => {
    email = event.target.value;
}

//Функция для отображения пароля
const showPassInputHandler = () => {
    if (inputPass.type == "password") {
        inputPass.type = "text";
        inputPassShow.textContent = "HIDE";
        inputPassShow.style.color = "#3498db";

        inputPassShow.remove();
        inputPass.after(inputPassShow);
    } else if (inputPass.type == "text") {
        inputPass.type = "password";
        inputPassShow.textContent = "SHOW";
        inputPassShow.style.color = "#222";

        inputPassShow.remove();
        inputPass.after(inputPassShow);
    }
};

//inputPass.addEventListener("input", changePassInput);
//Отображение пароля в input пароль
inputPassShow.addEventListener("click", showPassInputHandler);
//Переключение между формой входа и восстановления пароля
linkForgotPass.addEventListener("click", switchLoginResetPassHandler);
//Переключение между формой восстановления пароля и формой входа 
resetBackButton.addEventListener("click", switchLoginResetPassHandler);
//Сохранение почты для востановления пароля и перенос между формами
inputResetPasEmail.addEventListener("input", saveEmailHandler);
inputEmail.addEventListener("input", saveEmailHandler);
