const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = '3000';
const constant = require('./constant');
const pathHtml = '/views/index.html';

// Read plain/text
// const readStream = fs.createReadStream(__dirname + constant.READ_ME, 'utf8');

// Read html
const readStream = fs.createReadStream(__dirname + pathHtml, 'utf8');
const writeStream = fs.createWriteStream(__dirname + constant.WRITE_ME);

const server = http.createServer((req, res) => {
    // console.log(req.url);

    // write text and plain
    // res.writeHead(200, {'Content-type':'text/plain'});

    // Write index html
    // res.writeHead(200, {'Content-type':'text/html'});

    // Write json
    res.writeHead(200, {'Content-type':'application/json'});
    
    // Add stream chunk to pipe and send to browser (write text palin and html)
    // readStream.pipe(res);
    // readStream.pipe(writeStream);
    // res.end('Hallo...')

    // send json to browser

    const myObj = {
        name : 'Ryue',
        job : 'Ninja',
        age : 29
    }

    res.end(JSON.stringify(myObj));


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});