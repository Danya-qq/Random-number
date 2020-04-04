const isNum = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};
let number = Math.floor(Math.random()*100);
console.log(number);
let restart = function(){
    return number = Math.floor(Math.random()*100);
};

function getNum(i){
    i--;
    let incomeNum = prompt('Угадай число от 1 до 100');
    return function() {
        if (i < 1) {
           if (confirm('Попытки закончились! Хотите сыграть еще?')) {
            i = 10;
            restart();
            console.log(number);
            return getNum(i);
            } else {
                alert('Пока')
            };  
        };   
        if (incomeNum == null) { 
            alert('Game over');
            return;
        } else if (!isNum(incomeNum)) {
            alert('Введи число!');
            return getNum(i);
        } else if (incomeNum == number) {
            alert('Поздравляю! Вы угадали!');
            if (confirm('Хотите сыграть еще?')){
                i = 10;
                restart();
                console.log(number);
                return getNum(i);
            } else {
                alert('Пока')
            };
        } else if (incomeNum < number) {
            alert('Загаданное число больше!' + ' Осталось ' + i + ' попыток');
            return getNum(i);
        } else if (incomeNum > number) {
            alert('Загаданное число меньше!' + ' Осталось ' + i + ' попыток');
            return getNum(i);
        };
    }();
 };
 
 getNum(10);






