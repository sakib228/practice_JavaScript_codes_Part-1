# practice_JavaScript_codes_Part-1
using js
# 🚀 JavaScript Basics & Conditional Logic Practice

A collection of fundamental JavaScript practice exercises covering arithmetic operators, data types, type conversion, and conditional statements (`if-else` & ternary operators).

---

## 📚 Topics Covered

| # | Topic | Concepts & Methods Used |
|---|---|---|
| 1 | **Arithmetic & Assignment Operators** | `+`, `+=`, `-=`, `/=` |
| 2 | **Type Checking & Conversion** | `typeof`, `Number()`, `parseFloat()`, `.toFixed()` |
| 3 | **Special Values** | `null` vs `undefined` |
| 4 | **Conditional Statements** | `if-else`, nested `if-else`, logical OR (`\|\|`), ternary (`? :`) |

---

## 💻 Code Snippets

### 1. Arithmetic & Assignment Operators
```javascript
// Q: Add two numbers and print the sum
var num1 = 50;
var num2 = 60;
var result = num1 + num2;
console.log(result); // 110

// Q: Add 20 using addition assignment (+=)
var num3 = 56;
num3 += 20;
console.log(num3); // 76

// Q: Divide by 10 (/=) and check data type
var num4 = 90;
num4 /= 10;
console.log(num4);        // 9
console.log(typeof num4); // "number"

// Q: Subtract 30 (-=) and check data type
var num5 = 10;
num5 -= 30;
console.log(num5);        // -20
console.log(typeof num5); // "number"
```

### 2. Type Conversion & Precision
```javascript
// Q: Convert numeric string to number using Number()
var num6 = "66";
console.log(typeof num6); // "string"
num6 = Number("66");
console.log(typeof num6); // "number"

// Q: Convert decimal string to float using parseFloat()
var num7 = "3.3";
num7 = parseFloat(num7);
console.log(num7, typeof num7); // 3.3 "number"

// Q: Add decimals and format to 3 decimal places
var res = 0.4 + 0.2;
console.log(res.toFixed(3)); // "0.600"
```

### 3. `null` vs `undefined`
```javascript
// Q: Compare uninitialized (undefined) and empty (null) variables
let a = null;
let b;

console.log(b);        // undefined
console.log(a);        // null
console.log(typeof a); // "object" (historical JS behavior)
```

### 4. Conditional Logic (`if-else` & Ternary)
```javascript
// Q: Nested if-else with logical NOT (!)
let age = 46;
let withAdult = true;

if (age >= 12) {
  if (!withAdult) {
    console.log("Yes, you can enter");
  } else {
    console.log("You cannot enter");
  }
} else {
  console.log("Not eligible");
}

// Q: Nested if-else with logical OR (||)
let height = 60;
let salary = 30000;
let isBcs = true;

if (salary > 25000 || isBcs) {
  if (height > 75) {
    console.log("Approved");
  } else {
    console.log("Height requirement not met");
  }
} else {
  console.log("Criteria not met");
}

// Q: Nested Ternary Operator
height = 70;
const status = salary >= 30000 ? (height >= 60 ? "Eligible" : isBcs) : false;
console.log(status); // "Eligible"
```
