


let GLOBALINPUT = new Array();
let GLOBALNUM = 0;

const inputbox = document.querySelector(".calc-inputs");
const screen = document.querySelector(".calc-screen");
const buttons = inputbox.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener('click', (e) =>{

    if( button.id == "clr"){    
        GLOBALINPUT = new Array();
        return;
    }

    if( button.id == "="){
        GLOBALINPUT.push(GLOBALNUM);
        console.log(GLOBALINPUT);
        screen.innerHTML = `<div> ${compute(GLOBALINPUT)} </div>`;
        // GLOBALINPUT = new Array();
        return;
    }
    
    if(button.id == "+" || button.id == "-" || button.id == "*" || button.id == "/" ){
        GLOBALINPUT.push(GLOBALNUM);
        GLOBALINPUT.push(button.id);
        GLOBALNUM = 0;
        
    }else{
        GLOBALNUM = GLOBALNUM*10 + Number.parseInt(button.id);
    }   

    screen.innerHTML = `${GLOBALINPUT.join("")}`;
}));

function applyOperator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return "Division by zero is not allowed.";
            }
        default:
            return "Invalid operator";
    }
}

function compute(arr){

    if(arr.length == 1){
        return arr[0];
    }

    let ops = ["/", "*", "+", "-"];
    
    for(let operator of ops){
        if(arr.indexOf(operator) != -1){
            let ind = arr.indexOf(operator);
            let d = applyOperator(arr[ind-1], arr[ind+1], operator);
            arr.splice(ind-1, 3, d );
            return compute(arr);
        };
    }
}
