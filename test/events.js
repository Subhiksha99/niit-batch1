// import http module
const http = require('http');
// createServer - creates webserver with all capabilities of EventEmitter

//const server = http.createServer();

//server.on()


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World!");
        res.end();
    }
    if (req.url === "/employees") {
        // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
        res.write(JSON.stringify([{ id: 101, name: 'Raj' }, { id: 102, name: 'Sam' }]));
        res.end();
    }
});

console.log("Listening on port 3000...");
server.listen(3000);