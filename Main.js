const display = document.querySelector(".display")
const numbtns = document.querySelectorAll('.numbtn')
const addbtn = document.querySelector('.addbtn')
const subbtn = document.querySelector('.subbtn')
const mulbtn = document.querySelector('.mulbtn')
const dvdbtn = document.querySelector('.dvdbtn')
const clrbtn = document.querySelector('.clrbtn')
const delbtn = document.querySelector('.delbtn')
const eqlbtn = document.querySelector('.eqlbtn')
let displayval = "0"
let firstopnd = {
  state:false,
  value:'0'
}
let secondopnd = {
  state: false,
  value: '0'
}
let operator = ''
let result = ''
function inputnum(num) {
if(displayval=== '0'){
  displayval = num
}else{
  displayval += num
}
updatedisplay()
}

function updatedisplay() {
  display.value = displayval;
}
function operations(op) {
  if (firstopnd.state === false) {
    firstopnd.value = displayval
    operator = op
    displayval = "0"
    updatedisplay()
    firstopnd.state = true
  } else if (firstopnd.state === true) {
    secondopnd.value = displayval
    displayval = "0"
    updatedisplay()
    secondopnd.state = true
  }
  if (firstopnd.state && secondopnd.state) {
     result = eval(firstopnd.value + operator + secondopnd.value)
    operator = ''
    displayval = result.toString()
    updatedisplay()
    firstopnd.state = false
    secondopnd.state = false
    if (result !== '') {
    firstopnd.value = displayval
    operator = op
    displayval = "0"
    firstopnd.state = true
    secondopnd.value = '0'
    }
  }
}

numbtns.forEach(btn => {
  btn.addEventListener("click", () =>{
    inputnum(btn.textContent)
  })
})
addbtn.addEventListener("click", ()=>{
  operations("+")
})
subbtn.addEventListener("click", () => {
  operations("-")
})
mulbtn.addEventListener("click", () => {
  operations("*")
})
dvdbtn.addEventListener("click", () => {
  operations("/")
})
eqlbtn.addEventListener("click", () => {
  if (firstopnd.state) {
  secondopnd.value = displayval
  secondopnd.state = true
  if (firstopnd.state && secondopnd.state) {
  result = eval(firstopnd.value + operator + secondopnd.value)
 result = result.toString()
  operator = ''
  displayval = result
  updatedisplay()
  firstopnd.state = false
  secondopnd.state = false
  }
  }
})
delbtn.addEventListener('click', () => {
  if (displayval.length > 1) {
    displayval = displayval.slice(0, -1)
    updatedisplay()
  } else {
    displayval = "0"
    updatedisplay()
  }
})
clrbtn.addEventListener('click',() => {
  firstopnd.state = false
  firstopnd.value = '0'
  secondopnd.state = false
  secondopnd.value = '0'
  operator = ''
  displayval = '0'
  updatedisplay()
})
