const k_ce = document.getElementById('k_ce');
const k_c = document.getElementById('k_c');
const k_del = document.getElementById('k_del');
const k_plus_minus = document.getElementById('k_plus_minus');

// ---------------------------

const screen = document.getElementById('screen');   

const printOnDisplay = char => () => {
    screen.innerHTML += char;
}

for(let i = 0; i < 10; i++) {
    document.getElementById(`k_${i}`).addEventListener('click', printOnDisplay(i));
}

document.addEventListener('keypress', ev => {
   const number = parseInt(ev.key);

   if (Number.isInteger(number) || ev.key === '.') {
       printOnDisplay(ev.key)();
   }
});

document.getElementById('k_point').addEventListener('click', () => {
    if (screen.innerHTML.indexOf('.') === -1) {
        printOnDisplay('.')();
    }
});

// --------------------------------------

let number = null;
let op = '';

getNumber = () => {
    const number = screen.innerHTML;
    screen.innerHTML = '';
    return parseFloat(number);
}

functionalKey = newOp => () => {
    const newNumber = getNumber();
    
    if (number === null) {
        number = newNumber;
    } else {
        number = calc(op, number, newNumber);
    }

    op = newOp;

    document.getElementById('result').innerHTML = number;
};

document.getElementById('k_eq').addEventListener('click', () => {
    const newNumber = getNumber();

    document.getElementById('result').innerHTML = calc(op, number, newNumber);

    number = null;
    op = '';
});

document.getElementById('k_add').addEventListener('click', functionalKey('+'));
document.getElementById('k_sub').addEventListener('click', functionalKey('-'));
document.getElementById('k_div').addEventListener('click', functionalKey('/'));
document.getElementById('k_mul').addEventListener('click', functionalKey('*'));
document.getElementById('k_del').addEventListener('click', functionalKey('del'))
// -----------------------------

const calc = (op, x, y) => {
    switch(op) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '': return 
    }
}

