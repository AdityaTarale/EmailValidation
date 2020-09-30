const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

//invalid
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.textContent = message;
};

//valid
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.add("success");
};

//Upper Case
const inputName = (inpName) => {
  return inpName.id.charAt(0).toUpperCase() + inpName.id.slice(1);
};

//check length
const checkInputLength = (input, min, max) => {
  if (input.value.length < 6) {
    showError(input, `${inputName(input)} must be least ${min} character`);
  } else if (input.value.length > 12) {
    showError(input, `${inputName(input)} must less than ${max} character`);
  } else {
    showSuccess(input);
  }
};

//email regex
const checkEmailValid = (email) => {
  const pattern = /^\S+@\S+$/;
  if (!pattern.test(email.value)) {
    showError(email, `Please type valid ${inputName(email)}`);
  }
};

const inputCheck = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, `Please check ${inputName(input)}`);
    } else {
      showSuccess(input);
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputCheck([email, password]);
  checkEmailValid(email);
  checkInputLength(password, 6, 12);
});
