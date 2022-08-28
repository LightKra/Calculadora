class operation {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    sum =() =>{
        return this.num1 + this.num2;
    }
    subtraction = () =>{
        return this.num1 - this.num2;
    }
    multiply = () =>{
        return this.num1 * this.num2;
    }
    division = () =>{
        return this.num1 / this.num2;
    }
}

export default operation;