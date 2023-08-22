
// Type Annotation in variables & Constants

let greet: string = "Hello World";
console.log(greet);

// greet = 100; // Error, ype 'number' is not assignable to type 'string'

let age: number = 21;
let isActive: boolean = true;
const contactNos: string[] = ['9999911111', '9999922222'];
var student: {
    rollNo: number,
    name: string
};

student = {
    rollNo: 201,
    name: "Ram"
}

// numbers
let hexaDec: number = 0X12B;
let octal: number = 0o54;
let binary: number = 0b1010;
let price: number = 79.30;

// string
let firstName: string;
let lastName: string = 'R';
let role: string = 'admin';

// enum - enumerated type
//  enum is a group of named constant values
enum sizes { SMALL, MEDIUM, LARGE };
//console.log(sizes);
console.log(sizes.LARGE === sizes.LARGE ? true : false); // true


// Function args & return type
function add(x: number, y: number) { return x + y }
function sub(x: number, y: number): number { return x - y }
function greetings(): void { console.log("Hello World!") }
function hello(name: string): string { return `Hello ${name}` }

/* 
    Type Inference  - Auto detection of type of an expression at compile time
*/
let counter = 0; // typescript inferers 'counter' type as number, if we initialize with number.
// counter = 'Raj'; //Err - Type 'string' is not assignable to type 'number

function mul(x: number, y = 100): number { return x * y }
mul(10);
mul(10, 200);
// mul(10, 'aa'); //Err: Argument of type 'string' is not assignable to parameter of type 'number'.


// never - throws an error
function raiseErr(msg: string): never {
    throw new Error(msg);
}
//raiseErr("User not found");

// aliases - create new name to the existing type
type num = number;
let n1: num;
n1 = 1000;

type chars = string;
let email: chars;
email = 'user@example.com'

type alphanumeric = string | number
let password: alphanumeric;
password = 1234;
password = 'abc123';

// tuple
// number of elements is fixed in tuple.
// type of elements known but need not to be same.

let movieRating: [string, number];
movieRating = ['Avatar', 4];

let mRat: [string, number][];
mRat = [['Departed', 3], ['DieHard', 4], ['Avatar-2', 4]];

// Union
function addAny(x: string | number, y: string | number) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}

/*Control flow statements
// if
if(condition) {
   // if-statement
}

// if else
if(condition) {
   // if-statement
} else {
    // else statement
}
// switch 
switch ( expression ) {
    case value1:
       // statement 1
       break;
    case value2:
       // statement 2
       break;
    default:
}

// for
for(initialization; condition; expression) {
    // statement
}

//while
while(condition) {
    // code
}

// do while
do {
    // do something
} while(condition);
break
*/

// Functions
// Default Parameters
// 10% discount
function applyDiscount(price, discount = 0.10) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95

// Optional parameters
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// Rest Parameters
// function fn(...rest: type[]) {
//     //code
//  }

function getSquareTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num * num);
    return total;
}

// class
import * as moment from "moment";
class Person {
    private firstName;
    private lastName;
    readonly dob;

    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    getFirstName() { return this.firstName };
    getLastName() { return this.lastName };
    getFullname() {
        return this.firstName + " " + this.lastName;
    }
    getDob() {
        return moment(this.dob).format("MMM Do YY");
    }
}

// Create an object
const p = new Person("Rakesh", 'J', new Date(2000, 12, 27));
console.log(p.getFullname());
console.log(p.getDob());

// inheritance
class Employee extends Person {
    empId: number;
    constructor(empId, firstName, lastName, dob) {
        super(firstName, lastName, dob);
        this.empId = empId;
    }
}
const emp1 = new Employee(1001, "Sam", 'K', new Date(2000, 12, 25));
console.log(emp1.getDob());

// Access modifiers
// 1. private
// 2. protected
// 3. public


// Intersection Types - creates a new type by combining multiple existing types.
//  type typeAB = typeA & typeB;

// Ex:

interface Book {
    id: number,
    bookName: string,

}
interface Author {
    authorName: string,
    contact: number
}

type inSecType = Book & Author;

let obj: inSecType = {
    id: 3001,
    bookName: "Javascript Programming",
    authorName: "David",
    contact: 9999912345
}



