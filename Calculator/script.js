const resultEl = document.querySelector('.result');
const btns = document.querySelectorAll('#btn');

let result = '';
let currentInput = '';

const operators = ['+', '-', 'x', '/', '%'];

const isOperators = (value) => operators.includes(value);

const calculate = (num1, operator, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            if(num2 == 0){
                return 'cant compute'
            }
        return num1 / 2
        case '%':
            return num1 % num2;
        default:
            return num2;
    }
};


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const inputvalue = e.target.textContent;

        if(inputvalue === 'AC'){
            result = '';
            currentInput= '';
        }
        else if (inputvalue === '+/-'){
            if(currentInput){
                currentInput=(parseFloat(currentInput) * -1).toString()
            }
        }
        else if(inputvalue === '='){
            if(currentInput){
                result += currentInput;
                currentInput= '';
                result=calculate(...result.split(/([+\-x/])/)).toString()
            }
        }
        else if(isOperators(inputvalue)) {
            if(currentInput) {
                result += currentInput + inputvalue;
                currentInput = '';
            } else if (result && !isOperators(result.slice(-1))){
                result += inputvalue;
            }
        }
        else if(inputvalue === '.'){
            if(!currentInput.includes('.')){
                currentInput += inputvalue;
            }
        }

        else {
            currentInput += inputvalue;
        }
        resultEl.textContent = currentInput || result || '0'
    })
})