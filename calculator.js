import operation from './operation.js'
let num1 = '';
let num2 = ''
let op = '';

const validationResult = (event, display1, display2) => {
    if(num1){
        num2 = display2.innerHTML;
        if(num2){
            console.log(op);
            console.log(validationOperation(Number(num1),Number(num2),op));
            display1.innerHTML = String(validationOperation(Number(num1),Number(num2),op));
            let op2 = event.target.innerHTML
            num1= (display1.innerHTML);
            if (op2!='='){
                display1.innerHTML = display1.innerHTML + op2
                op = op2;
            }else{
                display1.innerHTML = num1;
                num1 = '';
            }
            display2.innerHTML = '';
        }
    }else if(event.target.innerHTML != '='){
        if(!op){
            num1 = display2.innerHTML;
            op = event.target.innerHTML;
            display1.innerHTML = num1 + op;
            display2.innerHTML = '';
        }   
    }
}
const deleteT = () =>{
    num1 = '';
    num2 = '';
    op = '';
}
const validationOperation = (num1,num2,op) =>{
    const calculatorOp = new operation(num1,num2);
    if(op === '+') return calculatorOp.sum();
    if(op === '-') return calculatorOp.subtraction();
    if(op === 'x') return calculatorOp.multiply();
    if(op === '/') return calculatorOp.division();
}

export {validationResult, deleteT}