"use strict";
//let decimal: number = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//boolean
let isDone = false;
//string
let color = "blue";
color = 'red';
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month.`;
console.log(sentence);
//Array
let list = [1, 2, 3];
let listGeneric = [1, 2, 3];
//tuple
let x; //declare
// Initialize it
x = ["hello", 10]; // OK
console.log(x[0].substring(1));
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
//Unknown
let notSure = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;
