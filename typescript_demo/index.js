/*
 Data types
  number, boolean, string, NaN, Object, Symbol, enum
*/
// Variables
var x = 100;
x = 1000;
//x = "Hello"; // Type 'string' is not assignable to type 'number'.
console.log(x);
var str = 'Hello';
var isActive = true;
var colors = ['red', 'orange'];
// colors[0] = 100; // Type 'number' is not assignable to type 'string'
var contactNos = [9999912345, 9999912346];
var person;
person = {
    firstName: 'Raj',
    lastName: "R",
    email: 'raj_r@example.com'
};
var employee = {
    firstName: 'Sam',
    lastName: 'R',
    email: 'Sam_r@example.com'
};
console.log("person name: ".concat(person.firstName));
console.log("contactNos: ".concat(contactNos));
var hexaDec = 0X12B;
var octal = 44;
var binary = 10;
var price = 79.30;
console.log("hexaDecimalNumber: ".concat(hexaDec));
// enum - enumerated type
//  enum is a group of named constant values
var sizes;
(function (sizes) {
    sizes[sizes["SMALL"] = 0] = "SMALL";
    sizes[sizes["MEDIUM"] = 1] = "MEDIUM";
    sizes[sizes["LARGE"] = 2] = "LARGE";
})(sizes || (sizes = {}));
;
var weekdays;
(function (weekdays) {
    weekdays[weekdays["SUNDAY"] = 0] = "SUNDAY";
    weekdays[weekdays["MONDAY"] = 1] = "MONDAY";
    weekdays[weekdays["TUESDAY"] = 2] = "TUESDAY";
    weekdays[weekdays["WEDNESDAY"] = 3] = "WEDNESDAY";
    weekdays[weekdays["THURSDAY"] = 4] = "THURSDAY";
    weekdays[weekdays["FRIDAY"] = 5] = "FRIDAY";
    weekdays[weekdays["SATURDAY"] = 6] = "SATURDAY";
})(weekdays || (weekdays = {}));
;
var currentSize = sizes.SMALL;
var today = weekdays.TUESDAY;
console.log(typeof (today)); // number
console.log(typeof (weekdays.SATURDAY)); // number
// console.log(currentSize == sizes.LARGE ? true : false); // true
// console.log(today == weekdays.TUESDAY ? true : false); // true
console.log(sizes.MEDIUM); //1
// switch (currentSize) {
//     case sizes.MEDIUM:
//         console.log("Medium size");
//     case sizes.SMALL:
//         console.log("Small size");
//         break;
// }
// Function
function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function greetings() { console.log("Hello World!"); }
function hello(name) { return "Hello ".concat(name); }
function square(numArr) {
    return [];
}
function func(person) {
    return {};
}
console.log();
// Generics
var numArr = [10, 20, 30, 40];
var strArr = ['aa', 'bb', 'cc'];
function getRandomElement(arr) {
    //Math.random(); // 0-1
    var indx = Math.floor(Math.random() * arr.length);
    console.log(indx);
    return arr[indx];
}
console.log(getRandomElement(numArr));
function getRandomElement2(arr) {
    //Math.random(); // 0-1
    var indx = Math.floor(Math.random() * arr.length);
    console.log(indx);
    return arr[indx];
}
console.log(getRandomElement2(strArr));
// With Generics
console.log("With Generics");
function getRandomElement3(arr) {
    //Math.random(); // 0-1
    var indx = Math.floor(Math.random() * arr.length);
    console.log(indx);
    return arr[indx];
}
console.log(getRandomElement3(numArr));
console.log(getRandomElement3(strArr));
// Generic classes
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.getX = function () {
        return this.x;
    };
    return MyClass;
}());
var myClass = new MyClass();
myClass.x = 1000;
console.log(myClass.x);
console.log(myClass.getX());
var myClass2 = new MyClass();
myClass2.x = 'hello';
console.log(myClass2.x);
console.log(myClass2.getX());
