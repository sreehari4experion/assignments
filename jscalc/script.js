const input = document.getElementById("display-input")
const equalBtn = document.querySelector("#equals")
const addBtn = document.querySelector("#add")
const subtractBtn = document.querySelector("#subtract")
const multiplyBtn = document.querySelector("#multiply")
const divideBtn = document.querySelector("#divide")
const clearBtn = document.querySelector("#clear")

const btn1 = document.querySelector("#one")
const btn2 = document.querySelector("#two")
const btn3 = document.querySelector("#three")
const btn4 = document.querySelector("#four")
const btn5 = document.querySelector("#five")
const btn6 = document.querySelector("#six")
const btn7 = document.querySelector("#seven")
const btn8 = document.querySelector("#eight")
const btn9 = document.querySelector("#nine")
const btn0 = document.querySelector("#zero")
const decimalBtn = document.querySelector("#decimal")

// calculations
addBtn.addEventListener("click", () => {
  input.value += "+"
})
subtractBtn.addEventListener("click", () => {
  input.value += "-"
})
multiplyBtn.addEventListener("click", () => {
  input.value += "*"
})
divideBtn.addEventListener("click", () => {
  input.value += "/"
})
equalBtn.addEventListener("click", () => {
  input.value = eval(input.value)
})
clearBtn.addEventListener("click", () => {
  input.value = ""
})

//Number buttons
btn1.addEventListener("click", () => {
  input.value += "1"
})
btn2.addEventListener("click", () => {
  input.value += "2"
})
btn3.addEventListener("click", () => {
  input.value += "3"
})
btn4.addEventListener("click", () => {
  input.value += "4"
})
btn5.addEventListener("click", () => {
  input.value += "5"
})
btn6.addEventListener("click", () => {
  input.value += "6"
})
btn7.addEventListener("click", () => {
  input.value += "7"
})
btn8.addEventListener("click", () => {
  input.value += "8"
})
btn9.addEventListener("click", () => {
  input.value += "9"
})
btn0.addEventListener("click", () => {
  input.value += "0"
})
decimalBtn.addEventListener("click", () => {
  input.value += "."
})
