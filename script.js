'use strict';

const app = '123';

const number = 1; // глобальная переменная

// 1 способ: анонимная самовызывающаяся функция
(function(){
    let number = 2; // локальная переменная
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

// 2 способ: использование объектного интерфейса
const user = (function(){
    const privat = function() {
        console.log('I am private!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();