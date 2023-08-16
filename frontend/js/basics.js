console.log("Javascript programming!!!");

// JS developed based on ES5(Ecma script)- 2009
// variables
let x = 10;

let y = 'Hello'


// single line comment

/*
  multi
  line 
  comment
*/

// String - Single/double Quote

// Indentifiers
// [a-zA-Z0-9$_] - valid chars for giving names to variables/functions
// name should start with alphabet/$/_

// Data types
// Number, string, boolean, NaN, Object, undefined, BigInt


// verify type - typeof operator
console.log("x type: " + typeof (x));
console.log("y type: " + typeof (y));
console.log("100.01234 type: " + typeof (100.01234))
console.log("true type:" + typeof (true));
let z = 10 / 0;
console.log(z); // Infinity
console.log("10/0 type: " + typeof (z)); // Number
console.log(10 / 'Hello'); // NaN
console.log(0 / 0); // NaN
console.log(typeof (0 / 0)); //number
let i;
console.log(typeof (i));//undefined

// Object - {}
let person = {
    firstName: "Raj",
    lastName: "K",
    contact: [9999911111, 9999922222],
    address: [
        {
            dNo: "1234B",
            city: "Chennai"
        },
        {
            dNo: "456G",
            city: "Bangalore"
        },
    ]
}
console.log("null type: " + typeof (null)); // object 
console.log("person type: " + typeof (person)); // Object
console.log("array type: " + typeof (person.contact));// object

let j = BigInt('1231314323546457678686823123124225353456546');
console.log(typeof (j));// bigint

console.log(person.address[1]);
console.log(person.address[1].city);


// Array - [], index values to be used for accessing array
let shapes = ['cube', 'triangle'];
console.log(shapes[0]); // cube
console.log(shapes);
// add an element to array
shapes.push('circle');
console.log(shapes);
// remove an element
shapes.pop();
console.log(shapes);
console.log("indexOf triangle: " + shapes.indexOf('triangle'));
console.log(shapes.includes('cube')); // true


// String
let str = "Hello World";
console.log("string length: " + str.length);
console.log("charAt index 3: ", str.charAt(3));
let strArr = str.match("l.*");
for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]); //llo World
}
// using in operator
console.log(shapes)
for (let s in shapes) {
    console.log(shapes[s]); // cube, triangle
}

for (let s of shapes) {
    console.log(s);// cube, triangle
}

// while, do-while, switch
/*
// syntax

while (condition) {
    //logic
}

do {
    //logic
} while (condition)

switch (expression) {
    case 1:
        //logic
        break;
    case 2:
        // logic
        break;
    default:
    //logic
}
*/

/*
// Operators
Arithmetic Operators - +, -, *, ** (Exponentiation), /, %, ++, --
Assignment Operators - =, +=, -=, *=, /=
Comparison Operators - ==, ===, !=, !==, >, <, <=, >=, ? (ternary operator)
 == - loose equality - value alone compared
ex -
    let x = 100;
    let y = '100';
    x == y; true

    === - strict equality - type and value will be compared
ex -
    let x = 100; // number
    let y = '100'; // string
    x === y; false


Logical Operators - &&, ||, !
Bitwise Operators - &, !, ~, ^, << (leftshift), >> (rightshipt)
Ternary Operators - ?:
Type Operators - typeof, instanceof

*/

let x1 = 111;    // ES5, block scope
var y1 = 100;    // ES6, Global scope
const z1 = 1000; // ES6, Block scope

for (let i = 0; i < 5; i++) {
    console.log(i); //0, 1, 2, 3, 4
}
console.log(i); // undefined

for (var j1 = 0; j1 < 5; j1++) {
    console.log(j1); //0, 1, 2, 3, 4
}
console.log(j1); // 5

console.log(z1); // 1000
// z1 = 2000; // basics.js:165 Uncaught TypeError: Assignment to constant variable.
// console.log(z1);

// Hoisting - use variables before it is declared.
// - variable declared using 'var' keyword are hoisted to the top
// variable initialization
z2 = 3000;

// variable declaration
var z2;
// let z2; // annot access 'z2' before initialization

// accessing z2 var
console.log(z2)


// Functions
function add(x, y) {
    return x + y;
}

console.log(add(10, 20)); // 30