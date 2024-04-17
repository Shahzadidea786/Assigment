"use strict";
//Question 1:
//Hello Variable
//Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let name1 = "Shahzad";
console.log("Hello,", name1);
//Question 2:
//Basic Math
//Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 3;
let num2 = 5;
console.log("The sum is = ", num1 + num2);
console.log("The Difference is = ", num1 - num2);
console.log("The product is = ", num1 * num2);
console.log("The divide is = ", num1 / num2);
//Question 3:
//Swapping Values
//Instructions: Swap the values of two variables without using a third variable.
let a = 1;
let b = 3;
//[a ,b] = [b ,a]
console.log("The value of a ", [a, b] = [b, a]);
console.log("The value of b ", [b, a] = [a, b]);
//console.log("The value of a " , [a ,b] = [a ,b])
//Question 4;
//Type Annotation (TypeScript)
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let name2 = "Ali";
let num3 = 5;
// when we deciler the type any veriable in typescript. We cannot asign the inrealvent value like
//name2 = 1;
//num3 = "abc"; 
console.log(name2);
console.log(num3);
// Question no 5:
//Modulus Operator
//Instructions: Use the modulus operator to find the remainder of two numbers.
let num4 = 10;
let num5 = 7;
console.log("The remainder is = ", num4 % num5);
// Question no 6:
//Increment Challenge
//Instructions: Increment a variable's value by 1 using two different methods.
// method 1:
let num6 = 1;
let num7 = 10;
num6++,
    console.log("After the increment of the 1st veriable value is ", +num6);
// method 2:
console.log("After the increment of the 2nd veriable value is ", (num7 + 1));
// Question no 7:
// Logical Gates
//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let n = 10;
// AND gate
// T T = T
// T F = F
// F T = F
// F F = F
console.log(n >= 8 && n == 10);
console.log(n <= 16 && n > 15);
console.log(n < 10 && n > 8);
// OR gate
// T T = T
// T F = T
// F T = T
// F F = F
console.log(n >= 5 || n == 12);
console.log(n <= 11 || n >= 20);
console.log(n > 15 || n == 15);
// NOT gate
console.log((n == 5));
console.log((n > 8));
// Question no 8
//Compound Assignment
//Instructions: Show examples of using compound assignment operators.
let n1 = 10; // Use +=, -=, *=, and /= on this variable.
n1 += 5;
console.log(n1);
n1 -= 3;
console.log(n1);
n1 *= 4;
console.log(n1);
n1 /= 2;
console.log(n1);
// Question no 9
// Even or Odd
//Instructions: Write a program to check if a number is even or odd.
let num = 100; // Determine if this is even or odd.
if (num % 2 == 0) {
    console.log("This number is even");
}
else {
    console.log("This number is odd");
}
//Question no 10
//Voting Eligibility
//Instructions: Check if a person is eligible to vote.
let age = 1;
if (age >= 18) {
    console.log("You are eligible for voting");
}
else {
    console.log("You are not eligible for voting");
}
// Question no 11
//Grading System
//Instructions: Assign a grade based on a numerical score.
let number = 55;
if (number >= 90) {
    console.log("Your Garde is A");
}
else if (number >= 80) {
    console.log("Your Garde is B");
}
else if (number >= 70) {
    console.log("Your Garde is C");
}
else if (number >= 60) {
    console.log("Your Garde is D");
}
else if (number >= 50) {
    console.log("Your Garde is E");
}
else {
    console.log("Your are Fail");
}
// Question no 12 
// Max of Three
//Instructions: Find the maximum of three numbers.
let x = 10;
let y = 100;
let z = 30;
let largestnum = Math.max(x, y, z);
if (x > y && x > z) {
    console.log(largestnum);
}
else if (y > x && y > z) {
    console.log(largestnum);
}
else {
    console.log(largestnum);
}
//Question no 14
//Fahrenheit to Celsius Converter
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 101;
const c = fahrenheit - 32;
const calsius = c * 5 / 9;
//const calsius = (fahrenheit-32)* 5/9;
console.log(`After converting the temperature Fahrenheit to Celsius = ${calsius}°C`);
// Question no 15
// Positive, Negative, or Zero
//Instructions: Check if a number is positive, negative, or zero.
let n2 = -15;
if (n2 > 0) {
    console.log(`This number is positive`);
}
else if (n2 == 0) {
    console.log("This number is Zero");
}
else {
    console.log("This number is negative");
}
//Question no 16
//Multiplication Table
//Instructions: Write a program that prints the multiplication table of a given number up to 10.
let n3 = 10;
let n4 = 5;
for (let n3 = 0; (n3 <= 10); n3++) {
    console.log(n3 * n4);
}
