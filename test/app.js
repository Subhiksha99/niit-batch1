"use strict";
// Type Annotation in variables & Constants
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var greet = "Hello World";
console.log(greet);
// greet = 100; // Error, ype 'number' is not assignable to type 'string'
var age = 21;
var isActive = true;
var contactNos = ['9999911111', '9999922222'];
var student;
student = {
    rollNo: 201,
    name: "Ram"
};
// numbers
var hexaDec = 0X12B;
var octal = 44;
var binary = 10;
var price = 79.30;
// string
var firstName;
var lastName = 'R';
var role = 'admin';
// enum - enumerated type
//  enum is a group of named constant values
var sizes;
(function (sizes) {
    sizes[sizes["SMALL"] = 0] = "SMALL";
    sizes[sizes["MEDIUM"] = 1] = "MEDIUM";
    sizes[sizes["LARGE"] = 2] = "LARGE";
})(sizes || (sizes = {}));
;
//console.log(sizes);
console.log(sizes.LARGE === sizes.LARGE ? true : false); // true
// Function args & return type
function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function greetings() { console.log("Hello World!"); }
function hello(name) { return "Hello ".concat(name); }
/*
    Type Inference  - Auto detection of type of an expression at compile time
*/
var counter = 0; // typescript inferers 'counter' type as number, if we initialize with number.
// counter = 'Raj'; //Err - Type 'string' is not assignable to type 'number
function mul(x, y) {
    if (y === void 0) { y = 100; }
    return x * y;
}
mul(10);
mul(10, 200);
// mul(10, 'aa'); //Err: Argument of type 'string' is not assignable to parameter of type 'number'.
// never - throws an error
function raiseErr(msg) {
    throw new Error(msg);
}
var n1;
n1 = 1000;
var email;
email = 'user@example.com';
var password;
password = 1234;
password = 'abc123';
// tuple
// number of elements is fixed in tuple.
// type of elements known but need not to be same.
var movieRating;
movieRating = ['Avatar', 4];
var mRat;
mRat = [['Departed', 3], ['DieHard', 4], ['Avatar-2', 4]];
// Union
function addAny(x, y) {
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
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.10; }
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
// Optional parameters
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
// Rest Parameters
// function fn(...rest: type[]) {
//     //code
//  }
function getSquareTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num * num; });
    return total;
}
// class
var moment = require("moment");
var Person = /** @class */ (function () {
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    Person.prototype.getFullname = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getDob = function () {
        return moment(this.dob).format("MMM Do YY");
    };
    return Person;
}());
// Create an object
var p = new Person("Rakesh", 'J', new Date(2000, 12, 27));
console.log(p.getFullname());
console.log(p.getDob());
// inheritance
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empId, firstName, lastName, dob) {
        var _this = _super.call(this, firstName, lastName, dob) || this;
        _this.empId = empId;
        return _this;
    }
    return Employee;
}(Person));
var emp1 = new Employee(1001, "Sam", 'K', new Date(2000, 12, 25));
console.log(emp1.getDob());
var obj = {
    id: 3001,
    bookName: "Javascript Programming",
    authorName: "David",
    contact: 9999912345
};
