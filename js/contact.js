const form = document.querySelector("#contact-form");
const nameErr = document.querySelector("#fullNameError");
const subjectErr = document.querySelector("#subjectError");
const emailErr = document.querySelector("#emailError");
const messageErr = document.querySelector("#messageError");


function formVal(event) {

  event.preventDefault();

  const name = document.querySelector("#fullName");
  const subject = document.querySelector("#subject");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  if(checkLength(name.value, 3) === true) {
    nameErr.style.display = "none";
  }
  else {
    nameErr.style.display = "block";
  }
  if(checkLength(subject.value, 4) === true) {
    subjectErr.style.display = "none";
  }
  else {
    subjectErr.style.display = "block";
  }
  if(emailVal(email.value) === true) {
    emailErr.style.display = "none";
  }
  else {
    emailErr.style.display = "block";
  }
  if(checkLength(message.value, 20) === true) {
    messageErr.style.display = "none";
  }
  else {
    messageErr.style.display = "block";
  }
  if (checkLength(name.value, 0) && checkLength(subject.value, 0) && emailVal(email.value) && checkLength(message.value, 20) === true) {

    form.onsubmit = function formSuccess() {
      form.innerHTML = `
                      <div class="success"> Your form was submitted successfully.
                      </div>
                        `
    }
  }
  else {
    return false;
  }
}

form.addEventListener("submit", formVal);



//Length function

function checkLength(value, length) {
  if(value.trim().length >= length) {
    return true;
  }
  else {
    return false;
  }
}

//Email validation

function emailVal(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matches = regEx.test(email);
  return matches;
}