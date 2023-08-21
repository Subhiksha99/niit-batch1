// uuid, uniq, moment

// uniq
// reference - https://www.npmjs.com/package/uniq
const uq = require('uniq');
let arr = [10, 10, 20, 40, 30, 50];
console.log(arr);
uq(arr)
console.log(arr);

// moment
// reference - https://momentjs.com/
// A JavaScript date library for parsing, validating, manipulating, and formatting dates.
const moment = require('moment');
console.group(moment(new Date()).format('dddd')); // Monday
console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // August 21st 2023, 6:20:20 am

// uuid - Universally Unique Identifier
// reference - https://www.npmjs.com/package/uuid
// npm install uuid

const { v4: uuidv4 } = require('uuid');
console.log(uuidv4()); // d5c577b8-ac4b-4b68-aa12-ae80c75bc506

// const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'Fetch POST Request Example' })
// };
// fetch('https://reqres.in/api/articles', requestOptions)
//     .then(response => response.json())
//     .then(data => console.log(data));

const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fetch PUT Request Example' })
};
fetch('https://reqres.in/api/articles/1', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));


// // GET
// // Get all Posts
// /*fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(result => result.json())
//     .then(data => console.log("data", data));
// */

// // GET
// // Get specific Post
// fetch('https://jsonplaceholder.typicode.com/posts/2')
//     .then(result => result.json())
//     .then(data => {
//         console.log("Get Response: ")
//         console.log(data)
//     })
//     .catch(err => console.log(err));

// // Get Users
// fetch('https://reqres.in/api/users')
//     .then(result => result.json())
//     .then(data => {
//         console.log("Get Response: ")
//         console.log(data)
//     })
//     .catch(err => console.log(err));

// // DELETE
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// })
//     .then(res => res.text())
//     .then(res => {
//         console.log("Delete Response: ")
//         console.log(res)
//     })
//     .catch(err => console.log(err));

// // ADD



