var url = "http://localhost:8080/home"
var person = {
    name: "Shiv",
    age: 10,
}

function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}

console.log(add(10, 20));

module.exports.a = add;
module.exports.s = sub;
module.exports.url = url;
module.exports.p = person;
