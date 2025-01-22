const prompt = require('prompt-sync')();
function print(...str){
    console.log(...str)
}
function add(num1,num2) {
    return num1 + num2
}

// arrow function
// const sub = (num1,num2) => num1 - num2;
// print(sub(10,5));
// print(add(1,1));
// print("Okay");

// array & object
let fruits = ["mango", "apple", "banana"];
// for (let i = 0; 1 < fruits.length; i++) {
//     print(fruits[1]);
// }

// for (const element of fruits) {
//     print(fruit);
// }

let objStd = {
    id: 43169,
    fname: "Pongpan",
    fname: "Sripiboon"
}

print(objStd[1]);
// for (let i in fruits) {
//     print(fruits[1]);

// }

// let run = true
// let char = "";
// while (run) {
//  console.log("Hello");
// }

// //     char = prompt("End Program pass 'q' : ");
// //     // char[0] === 'q' ? run = false : run = true;
// //     if (char[0] === 'q') break;
// //     else continue;

// arrow fuction
const add = (n1,n2) => n1 + n2
