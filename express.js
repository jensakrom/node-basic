const express = require('express');
const app = express();
const port = '3001';
const hostname = '127.0.0.1';


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
})

app.get('/profile/:name', (req,res) => {
    const data = {
        name : 'Ryue',
        job : 'Ninja',
        age : 29
    }
    res.render('profile', {person: req.params.name, data: data});
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})