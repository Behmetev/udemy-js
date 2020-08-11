'use strict'

const now = new Date();

/*
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getMinutes());
console.log(now.getTimezoneOffset());
console.log(now.setHours(5));
*/

let start = new Date();

for(let i = 0; i < 1000000; i++){
    let some = i ** 3;
}

let end = new Date();

console.log(end - start);