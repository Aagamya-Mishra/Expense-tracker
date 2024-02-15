const inc = document.querySelector(".welcome input");
const income = document.querySelector(".left p");
const expval = document.querySelector(".right p");
const spend = document.querySelector(".spend-on");
const newExpense = document.querySelector(".expense input");
const saved = document.querySelector(".saved")
var incval = 0;

const createExpense = (item) => {
    const expense = document.createElement("li");
    expense.innerHTML = item;
    spend.appendChild(expense)
    expense.style.padding = "5px"
}

inc.addEventListener("keyup",function(val){
    if(val.key === "Enter"){
    incval = this.value;
    income.innerHTML = `$${incval}`;
    } else{
        return ;
    }
})

var clutter = 0;
var clutterNew = 0;
newExpense.addEventListener("keyup",function (elem){
    if(elem.key === "Enter"){
        createExpense(this.value);
        clutter = Number(this.value);
        clutterNew += clutter;
        expval.textContent = `$${clutterNew}`
        saved.textContent = `Money Saved :${incval - clutterNew}`
    } else{
         return ;
    }
})