
// 4.8 let sum = 0; 
// let count = 0; 
// let number;


// while (true) {
//     number = parseFloat(prompt('Enter a number : '));

//     if (number < 0) {
//         break; 
//     }

//     sum += number; 
//     count++; 

// if (count > 0) {
//     let average = sum / count; 
//     console.log('Average is:', average);
// } else {
//     console.log('No positive numbers entered.'); 
// }
// }


// 4.9 let max = Number.NEGATIVE_INFINITY; 
// let num;

// while (true) {
//     num = parseFloat(prompt('Enter a number (stop with 0): ')); 

//     if (num === 0) {
//         break; 
//     }

//     if (num > max) {
//         max = num; 
//     }
// }

// if (max > Number.NEGATIVE_INFINITY) {
//     console.log(`Max number is: ${max}`);
// } else {
//     console.log('No numbers were entered.');
// }



// 4.10 let continueProgram;

// do {

//     let num1 = parseFloat(prompt("Enter the first number: "));
//     let num2 = parseFloat(prompt("Enter the second number: "));

//     let operation = prompt('Enter "add" to add or "sub" to sub: ').toLowerCase();

//     if (operation === 'add') {
//         console.log(`Result: ${num1 + num2}`);
//     } else if (operation === 'sub') {
//         console.log(`Result: ${num1 - num2}`);
//     } else {
//         console.log('Invalid operation! Please enter "add" or "sub".');
//     }

//     continueProgram = prompt("Do you want to continue? (y/n): ").toLowerCase();
// } while (continueProgram === "y");

// 5.1 let prompt = require('prompt-sync')();

// let addNumbers = (num1, num2) => num1 + num2;

// let num1 = parseFloat(prompt('Enter the first number: '));
// let num2 = parseFloat(prompt('Enter the second number: '));

// console.log(`The sum is: ${addNumbers(num1, num2)}`);


// 5.2 let isPositiveNumber = (num) => num > 0;

// console.log(isPositiveNumber(parseFloat(prompt('Enter a number: '))) 
//     ? "The number is positive." 
//     : "The number is not positive.");

// 5.3 console.log(prompt('Enter a text: ').toLowerCase());

// 5.4 function isEven(num) {
//     return num % 2 === 0;
// }


// console.log(isEven(4));  
// console.log(isEven(7));  

// 5.5 const fToC = f => (f - 32) / 1.8;
// console.log(fToC(32)); 

// 5.6 const isOdd = n => n % 2 !== 0;
// console.log(isOdd(7)); 

// 5.7 const difference = (a, b) => Math.abs(a - b);
// console.log(difference(10, 5)); 

// 5.8 const isPrime = n => n > 1 && [...Array(n).keys()].slice(2).every(i => n % i);
// console.log(isPrime(7));  
// console.log(isPrime(0)); 

// 6.1 const prompt = require('prompt-sync')(); 

// let friends = [];

// for (let i = 0; i < 5; i++) {
//     console.log(`Enter information for friend ${i + 1}:`);
    

//     let studentID = prompt("Enter student ID: ");
//     let firstName = prompt("Enter first name: ");
//     let lastName = prompt("Enter last name: ");
//     let phoneNumber = prompt("Enter phone number: ");
    

//     let houseNumber = prompt("Enter house number: ");
//     let district = prompt("Enter district: ");
//     let subDistrict = prompt("Enter sub-district: ");
//     let province = prompt("Enter province: ");
//     let postalCode = prompt("Enter postal code: ");
    

//     let friend = {
//         studentID: studentID,
//         firstName: firstName,
//         lastName: lastName,
//         phoneNumber: phoneNumber,
//         address: {
//             houseNumber: houseNumber,
//             district: district,
//             subDistrict: subDistrict,
//             province: province,
//             postalCode: postalCode
//         }
//     };


//     friends.push(friend);
// }

// console.log("\nFriends Information:");
// console.log(friends);

