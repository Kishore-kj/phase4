let pName = []
let pExpense =[]

const prodName = document.getElementById("pname")
const prodPrice = document.getElementById("pprice")
const addEl = document.getElementById("add-el")
const totalEl = document.getElementById("total-el")
const deleteEl = document.getElementById("delete-el")
const resetEl = document.getElementById("reset-el")
const ulEl = document.getElementById("demo")
const leadslocalSto =JSON.parse(localStorage.getItem("pName"))
const leadslocalSto1 =JSON.parse(localStorage.getItem("pExpense"))



if(leadslocalSto){
    pName = leadslocalSto
    pExpense= leadslocalSto1
    render(pName,pExpense)
}

function delet(){
    pName.pop()
    pExpense.pop()
    localStorage.setItem("pName",JSON.stringify(pName))
    localStorage.setItem("pExpense",JSON.stringify(pExpense))
    render(pName,pExpense)
    total()
}

function reset(){
    localStorage.clear()
    pName = ""
    pExpense =""
    render(pName,pExpense)
    total()

}

function add(){
    pName.push(prodName.value)
    pExpense.push(prodPrice.value)
    prodName.value=""
    prodPrice.value=""

    localStorage.setItem("pName",JSON.stringify(pName))
    localStorage.setItem("pExpense",JSON.stringify(pExpense))
     
    render(pName,pExpense)
    total()
}


function render(name,expense){
    let listItems =""

for(let i =0;i<name.length ;i++){

    let out = name[i] +"  -  "+ expense[i]
     //listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i] +"</li>"
     listItems += `
     <li>
     ${out} 
     </li>
     `

}
ulEl.innerHTML =listItems
total()
}

function total(){
    let totalv =0
    let a=0
    for(let j=0;j<pExpense.length ; j++){
      
        a = parseInt(pExpense[j])
        totalv +=a
    }
    totalEl.textContent = totalv

}