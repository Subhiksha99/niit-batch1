/*
    // npm version
    npm version

    // install pkg
    npm install <pkg-name>

    // list pkgs
    npm list

    // update pkg
    npm update <pkg-name>

    // uninstall pkg
    npm uninstall <pkg-name>

    // Search pkg
    npm search <pkg-name>
*/

// uniq - return unique elements present in an array
const uniq = require('uniq');
const numArr = [10, 12, 14, 10, 12, 14, 16, 14, 20];
console.log(numArr);
const uniqArr = uniq(numArr);
console.log(uniqArr);

// uuid - generate unique id
const { v4: uuidv4 } = require('uuid');

console.log(uuidv4()); // 3dcfa02e-60b9-4389-af1c-a542e7cd0c5f
// 9466d672-36a3-465c-ba0e-245f9449a5a6

// moment- date format
const moment = require('moment');
let date = new Date();
console.log(date); //2023-08-21T05:04:04.904Z
let day = moment(date).format('dddd');
console.log(day); //Monday
console.log(moment(date).format("MMM Do YY")); // Aug 21st 23

// fetch - promise based interface
//   send request to server using browser
//fetch('url').then().then().catch(err)
// GET - All posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Get specific post
fetch('https://jsonplaceholder.typicode.com/posts/90', { method: 'get' })
    .then(res => res.json())
    .then(data => {
        console.log("Deleted post with id 90 successfully!")
        console.log(data)
    })
    .catch(err => console.log(err));

// DELETE
fetch('https://jsonplaceholder.typicode.com/posts/90', { method: 'delete' })
    .then(res => res.json())
    .then(data => {
        console.log("Post with Id 90: ")
        console.log(data)
    })
    .catch(err => console.log(err));


// Post - Add new record in the db
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        'userId': 10000,
        "id": 20000,
        "title": 'Post 20000',
        "body": 'Post 20000 body'
    })
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err));

// PUT - Update existing details
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        'userId': 10000,
        "id": 101,
        "title": 'Put 20010',
        "body": 'Put 20010 body'
    })
})
    .then(res => res.json())
    .then(data => {
        console.log("Updated Post with id 101 successfully!")
        console.log(data)
    })
    .catch(err => console.log(err));


// node modules
// os, fs, events, http
// os
const os = require('os');
console.log(`hostname: ${os.hostname()}`);
console.log(`platform: ${os.platform()}`);
console.log(`totalmem: ${os.totalmem()}`);
console.log(`freemem: ${os.freemem()}`);

// fs
// import file system module
const fs = require('fs');

// list files & sub directories present in a dir
const files = fs.readdirSync('./'); // [ 'index.js', 'node_modules', 'package-lock.json', 'package.json' ]
console.log(files);

// (OR)
fs.readdir('./123', (err, files) => {
    if (err) console.log('Error', err); //  no such file or directory
    else console.log("Files", files); // Files [ 'index.js', 'node_modules', 'package-lock.json', 'package.json' ]
})


//    Events module - emit events
// import events module
const EventEmitter = require('events');

// Create EventEmitter Object
const emitter = new EventEmitter();

//Register a listner: Listen for event and execute callback function when event raised.
emitter.on('myEvent', (data) => {
    console.log('myEvent raised');
    console.log(data);
})

// Emit event - produce an event
emitter.emit('myEvent', { id: 101, name: 'shiv' });


