const isNum = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let number = Math.floor(Math.random()*100);
console.log(number);

function getNum(num){
    let incomeNum = prompt('Угадай число от 1 до 100');
    // outer: incomeNum = prompt('Введи число повторно от 1 до 100')
     return function() {
        if (incomeNum == null) { 
            alert('Game over');
            return;
        } else if (!isNum(incomeNum)) {
            alert('Введи число!');
            return getNum(num);
        } else if (incomeNum == num) {
            alert('Угадал!');
            return;
        } else if (incomeNum < num) {
            alert('Загаданное число больше');
            return getNum(num);
        } else if (incomeNum > num) {
            alert('Загаданное число меньше');
            return getNum(num);
        };
    }();
 };
 
 getNum(number);




