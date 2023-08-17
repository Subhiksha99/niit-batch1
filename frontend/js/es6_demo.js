// es6 (ECMA Script 6)- 2015 - React
// Typescript - Angular
// var, const 
const colors = ['red', 'yellow', 'orange'];
console.log(colors);
colors[0] = 'white';
console.log(colors);

console.log()
colors.push('blue');
console.log(colors);

console.log(colors.slice(0, 2));


//colors = ['black', 'white', 'pink']; //  Assignment to constant variable.
//console.log(colors);

const product = {
    id: 10001,
    name: "TV",
    vendor: "samsung",
}

console.log()
console.log(product)
product.name = "FHD TV";
console.log(product);


//product = {}; //  Assignment to constant variable.
//console.log(product);


let str = "Hello";
// Date, regexp, Math


// Object Destructuring
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

console.log(person.address[0].city);
console.log(person.contact[1]);
console.log(person.firstName);

// const { address } = person.address;
// console.log(address);
// console.log(address[0]); // return 1st addr information
// console.log(address[1].city); // return 2nd addr city info

const { firstName: fName, lastName, contact, address } = person;
console.log()
//console.log(firstName);
console.log(fName);
console.log(lastName);
console.log(contact);
console.log(address);


console.log()
console.log("###Array Destructuring")
// Array Destructuring
const [clr1, clr2, clr3] = colors;
console.log(colors[0]);
console.log(clr1);
console.log(clr2);
console.log(clr3);

console.log();
// Arrow Functions
let func = function add(x, y) {
    return x + y;
};

console.log(func(10, 20));

// ex - arrow functions
let add = (x, y) => x + y;
console.log(add(100, 200));

let greet = () => console.log("Hello world");
greet();

let square = (num) => num * num;
console.log(square(30));

let isEven = (num) => {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}

console.log(isEven(13));

// Template literals - `${}`
console.log("firstName: " + fName + " | " + "lastName: " + lastName);
console.log(`firstName: ${fName} | lastName: ${lastName}`);

// optional parameters
function add1(x, y = 5) {
    return x + y;
}
console.log(add1(10)); // 15
console.log(add1(10, 30));//40

// Rest Parameters
function add2(x, y, ...nums) {
    let total = x + y;
    for (let num of nums) {
        total = total + num;
    }
    return total;
}
console.log("###Rest Parameters")
console.log(add2(10, 15));
console.log(add2(10, 15, 20));
console.log(add2(10, 15, 20, 25));
console.log(add2(10, 15, 20, 25, 30));

// Spread operator(...) - allow to copy one array elements into another array
console.log(colors);
let newColors = [...colors, 'gold', 'silver'];
let newColors2 = ['gold', ...colors, 'silver'];
let newColors3 = ['gold', 'silver', ...colors];
console.log(newColors);
console.log(newColors2);
console.log(newColors3);

// class
// Create class
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

// create object
let p1 = new Person('Raj', 21);
let p2 = new Person('Sam', 22);


// read object propertie values
console.log(p1.name);
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);


// update object properties
p1.age = 22;
p1.setName("Raj K");
console.log(p1.age);
console.log(p1.name)

// export & import
// export types - default export & named exports

// export default es6_demo;
// import es6_demo from '../path';

// named export

// import {add, sub} from '../path';
