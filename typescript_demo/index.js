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
console.log(typeof (today));
console.log(typeof (weekdays.SATURDAY));
// console.log(currentSize == sizes.LARGE ? true : false); // true
// console.log(today == weekdays.TUESDAY ? true : false); // true
console.log(sizes.MEDIUM); //1
switch (currentSize) {
    case sizes.SMALL:
        console.log("Small size");
}
