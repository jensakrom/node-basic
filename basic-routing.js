const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1'
const port = '3000';


const server = http.createServer((req, res) => {
    console.log(req.url);
if(req.url === '/home' || req.url === '/'){
    res.statusCode = '200';
    res.setHeader('Content-type', 'text/html');
    // res.writeHead(200, {'Content-type' : 'text/html'});
    const readStream = fs.createReadStream(__dirname + '/view/index.html', 'utf8');
    readStream.pipe(res);
} else if(req.url === '/contact'){
    res.statusCode = '200';
    res.setHeader('Content-type', 'text/html');
    // res.writeHead(200, {'Content-type' : 'text/html'});
    const readStreamContact = fs.createReadStream(__dirname + '/view/contact.html', 'utf8');
    readStreamContact.pipe(res);
} else if (req.url ==='/api/name'){
    res.statusCode = '200';
    res.setHeader('Content-type', 'Application/json');
    // res.writeHead(200, {'Content-type': 'Application/json'});
    const myObj = {name : 'Ryue', job : 'Ninja', age : 29}
    res.end(JSON.stringify(myObj));
} else {
    // create not found page for empty path
    res.statusCode = '404';
    res.setHeader('Content-type', 'text/html');
    // res.writeHead(404, {'Content-type' : 'text/html'});
    const readStreamNotFound = fs.createReadStream(__dirname + '/view/notFound.html', 'utf8');
    readStreamNotFound.pipe(res);
}
})

server.listen(port, hostName, () =>{
    console.log(`Server running at http://${hostName}:${port}/`);
})