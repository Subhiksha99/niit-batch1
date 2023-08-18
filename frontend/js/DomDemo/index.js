
// import specific module
let c = require('./calc');

console.log("index module.");
console.log(c.a(10, 15));
console.log(c.s(10, 15));
console.log(c.url);
console.log(c.p);

// Promise example
let response = false
let promise = new Promise(function (resolve, reject) {
    console.log("Promise is pending");
    // 
    setTimeout(() => {
        if (response) {
            console.log("fulfilled");
            resolve(response)
        } else {
            console.log("Rejected");
            reject("Network Failure");
        }

    }, 5000)
})
//console.log(promise);
