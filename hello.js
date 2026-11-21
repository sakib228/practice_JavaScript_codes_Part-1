// Q: Add two numbers and print the sum
var num1 = 50;
var num2 = 60;
var result = num1 + num2;
console.log(result);

// Q: Add 20 to an existing number using addition assignment (+=)
var num3 = 56;
num3 += 20;
console.log(num3);

// Q: Divide a number by 10 using division assignment (/=) and check its data type
var num4 = 90;
num4 /= 10;
console.log(num4);
console.log(typeof num4);

// Q: Print a number and its type, subtract 30 using subtraction assignment (-=), and check type
var num5 = 10;
console.log(num5);
console.log(typeof num5);
num5 -= 30;
console.log(typeof num5);

// Q: Convert a numeric string ("66") to a number using Number() and check types
var num6 = "66";
console.log(num6);
console.log(typeof num6);
num6 = Number("66");
console.log(num6);
console.log(typeof num6);

// ------------------------------------------

// Q: Convert a decimal string ("3.3") to a floating-point number using parseFloat()
var num7 = "3.3";
console.log(num7);
console.log(typeof num7);
num7 = parseFloat(num7);
console.log(num7);
console.log(typeof num7);

// Q: Declare a float variable and log its value and type
var num8 = 5.5;
console.log(num8);
console.log(typeof num8);

// Q: Add two decimal numbers (0.4 + 0.2) and format the output to 3 decimal places
var num1 = 0.4;
var num2 = 0.2;
var res = num1 + num2;
console.log(res.toFixed(3));

// -------------------------------------------

// Q: Declare an uninitialized variable (undefined) and print it
var num9;
console.log(num9);

// Q: Compare null vs undefined variables and check typeof null (historical JS quirk: "object")
let a = null;
let b;
console.log(b);
console.log(a);
console.log(typeof a);

// -------------------------------------------

// Q: Check age and adult-accompaniment condition using nested if-else (Note: missing closing brace `}` at end)
let age = 46;
let withAdult = true;
console.log("age :", age);
if (age >= 12) {
    console.log("yes, you are Excite");
    if (!withAdult) {
        console.log("yes, you are Excite");
    } else {
        console.log("you can not enter");
    }
} else {
    console.log("not excite");
} // <-- Added missing closing brace so it runs cleanly

// ----------------------------------------

// Q: Check salary/BCS status (OR) and height requirement (AND) using nested if-else
let height = 60;
let salary = 30000;
let isBcs = true;

if (salary > 25000 || isBcs) {
    if (height > 75) {
        console.log("asho baba kobul");
    } else {
        console.log("vag beta mogbul");
    }
} else {
    console.log("vag beta mogbul");
}

// -----------------------------------------------

// Q: Evaluate a nested ternary condition (Note: result is not saved or printed; redeclaring `let` in same scope throws SyntaxError)
let height = 70;
let salary = 30000;
let isBcs = true;

// ternary if else
salary >= 30000 ? (salary >= 30000 ? height >= 60 : isBcs) : false;
console.log("yes,exit");
