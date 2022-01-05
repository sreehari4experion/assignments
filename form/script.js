const fullNameAlert = document.querySelector("#nameHelp")
const emailAlert = document.querySelector("#emailHelp")
const phoneAlert = document.querySelector("#phoneHelp")
const passAlert = document.querySelector("#passHelp")
const ConfirmPassAlert = document.querySelector("#passHelp1")

const fullName = document.querySelector("#exampleInputFullName")
const email = document.querySelector("#exampleInputEmail")
const phone = document.querySelector("#exampleInputPhone")
const pass = document.querySelector("#exampleInputPassword1")
const ConfirmPass = document.querySelector("#exampleInputPassword2")

const registerBtn = document.querySelector("#registerBtn")

const validateForm = () => {
  let isValid = true
  if (fullName.value === "") {
    fullNameAlert.innerHTML = "Full Name is required"
    isValid = false
  }
  if (email.value === "") {
    emailAlert.innerHTML = "Email is required"
    isValid = false
  }
  if (phone.value === "") {
    phoneAlert.innerHTML = "Phone is required"
    isValid = false
  }
  if (pass.value === "") {
    passAlert.innerHTML = "Password is required"
    isValid = false
  }
  if (ConfirmPass.value === "") {
    ConfirmPassAlert.innerHTML = "Confirm Password is required"
    isValid = false
  }
  if (pass.value !== ConfirmPass.value) {
    ConfirmPassAlert.innerHTML = "Password not match"
    isValid = false
  }
  return isValid
}

registerBtn.addEventListener("click", validateForm)
