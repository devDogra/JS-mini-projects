/* todo: if any error, show the error box */

/* <li class="error-exists">ERROR</li>
<li class="username-length-error">Username must be AL 6 chars long</li>
<li class="password-length-error">Password must be AL 10 chars long</li>
<li class="password-match-error">Passwords must match</li>
<li class="terms-error">You must accept the terms</li> */

const usernameField = document.querySelector("input#username");
const passwordField = document.querySelector("input#password");
const password2Field = document.querySelector("input#password2");
const termsField = document.querySelector("input#terms");

const form = document.querySelector("form");

const usernameLenError = document.querySelector(".username-length-error");

const errorBox = document.querySelector(".error-box");

const passwordLenError = document.querySelector(".password-length-error");
const passwordMatchError = document.querySelector(".password-match-error");
const termsError = document.querySelector(".terms-error");

form.addEventListener("submit", (e) => {
    let numErrors = 0;

    console.log(usernameField);
    console.log(passwordField);
    console.log(password2Field);
    console.log(termsField);

    if (usernameField.value.length < 6) {
        errorBox.classList.add("visible");
        usernameLenError.classList.add("visible");
        numErrors++;
    } else {
        // if (usernameLenError.classList.contains("visible")) numErrors--;
        usernameLenError.classList.remove("visible");
    }

    if (passwordField.value.length < 10) {
        errorBox.classList.add("visible");
        passwordLenError.classList.add("visible");
    } else if (password2Field.value != passwordField.value) {
        errorBox.classList.add("visible");
        passwordLenError.classList.remove("visible");
        passwordMatchError.classList.add("visible");
    } else {
        passwordLenError.classList.remove("visible");
        passwordMatchError.classList.remove("visible");
    }

    if (termsField.checked == false) {
        errorBox.classList.add("visible");
        termsError.classList.add("visible");
    } else {
        termsError.classList.remove("visible");
    }

    // at the end, we now check how many errors are visible
    let errorsVisible = document.querySelectorAll(".visible").length;
    console.log(errorsVisible);
    if (errorsVisible == 1) {
        errorBox.classList.remove("visible");
    } else {
        e.preventDefault();
    }
});
