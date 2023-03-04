//let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//boolean
let isDone: boolean = false;

//string
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month.`;
console.log(sentence);

//Array
let list: number[] = [1, 2, 3];

let listGeneric: Array<number> = [1, 2, 3];

//tuple
let x: [string, number];//declare
// Initialize it
x = ["hello", 10]; // OK
console.log(x[0].substring(1));

//Enum
enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;

  //Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";
 
// OK, definitely a boolean
notSure = false;
