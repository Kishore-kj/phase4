let n1 = 8
let n2 = 2
let sumEl = document.getElementById("sum-el")
document.getElementById("num1").textContent = n1
document.getElementById("num2").textContent = n2

function add(){


    sumEl.textContent ="Sum = " 
    let sum = n1+n2
    sumEl.textContent += sum
    
}

function sub(){
    sumEl.textContent ="Sum = " 
   let sub = n1-n2
    sumEl.textContent += sub

}

function multiply(){
    sumEl.textContent ="Sum = " 
    let mul = n1*n2
    sumEl.textContent += mul
    console.log(mul)
}

function divide(){
    sumEl.textContent ="Sum = " 
    let divid = n1/n2
    sumEl.textContent += divid
}