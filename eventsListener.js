import {validationResult,deleteT} from './calculator.js'
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const deleteTotal = document.getElementById("deleteTotal");
const deleteP = document.getElementById("deleteP");
const nums = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");

const numsFunction = (nums)=>{
    Array.from(nums).forEach(element => {
        element.addEventListener("click",(event)=>{
            const num = event.target.innerHTML;
            display2.innerHTML = display2.innerHTML + num;
        })
    })
}

const operatorsFunction = (operators) =>{
    Array.from(operators).forEach(element =>{
        element.addEventListener("click",(event)=>{
            validationResult(event,display1,display2);
        });
    })
}
const deleteTotalFunction = () =>{
    deleteTotal.addEventListener('click',()=>{
        deleteT();
        display1.innerHTML ='';
        display2.innerHTML ='';
    })
}
const deletePFunction = () =>{
    deleteP.addEventListener('click',() =>{
        const data = display2.innerHTML;
        const dataSize = data.length;
        display2.innerHTML = data.slice(0, dataSize-1);
    });
}
const mainCalculator = () =>{
    numsFunction(nums);
    operatorsFunction(operators);
    deleteTotalFunction();
    deletePFunction();
}
mainCalculator();