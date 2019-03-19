const express = require('express');
const app = express();
const port = '3001';
const hostname = '127.0.0.1';


app.get('/', (req, res) => {
    res.send('This is home');
});

app.get('/contact', (req, res) => {
    res.send('This is contact');
})

app.get('/profile/:id', (req,res) => {
    res.send('your access profile with id ' + req.params.id);
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})