/*
 Data types
  number, boolean, string, NaN, Object, Symbol, enum
*/
// Variables

let x: number = 100;
x = 1000;
//x = "Hello"; // Type 'string' is not assignable to type 'number'.
console.log(x);

let str: string = 'Hello';
let isActive: boolean = true;
let colors: string[] = ['red', 'orange'];
// colors[0] = 100; // Type 'number' is not assignable to type 'string'

let contactNos: number[] = [9999912345, 9999912346];

let person: {
    firstName: string,
    lastName: string,
    email: string
};
person = {
    firstName: 'Raj',
    lastName: "R",
    email: 'raj_r@example.com'
};

let employee: {
    firstName: string,
    lastName: string,
    email: string
} = {
    firstName: 'Sam',
    lastName: 'R',
    email: 'Sam_r@example.com'
};

console.log(`person name: ${person.firstName}`);
console.log(`contactNos: ${contactNos}`);

let hexaDec: number = 0X12B;
let octal: number = 0o54;
let binary: number = 0b1010;
let price: number = 79.30;

console.log(`hexaDecimalNumber: ${hexaDec}`);

// enum - enumerated type
//  enum is a group of named constant values
enum sizes { SMALL, MEDIUM, LARGE };
enum weekdays { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY };

let currentSize: sizes = sizes.SMALL;
let today: weekdays = weekdays.TUESDAY;
console.log(typeof (today)); // number
console.log(typeof (weekdays.SATURDAY)); // number
// console.log(currentSize == sizes.LARGE ? true : false); // true
// console.log(today == weekdays.TUESDAY ? true : false); // true
console.log(sizes.MEDIUM);//1

// switch (currentSize) {
//     case sizes.MEDIUM:
//         console.log("Medium size");
//     case sizes.SMALL:
//         console.log("Small size");
//         break;

// }

// Function
function add(x: number, y: number) { return x + y }
function sub(x: number, y: number): number { return x - y }
function greetings(): void { console.log("Hello World!") }
function hello(name: string): string { return `Hello ${name}` }
function square(numArr: number[]): number[] {
    return [];
}
function func(person: {}): {} {
    return {};
}

console.log()




