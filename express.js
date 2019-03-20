const express = require('express');
const app = express();
const port = '3001';
const hostname = '127.0.0.1';
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/views/index.html');
    res.render('index');
});

app.get('/contact', (req, res) => {
    console.log(req.query);
    // res.sendFile(__dirname + '/views/contact.html');
    res.render('contact', {qs: req.query});
})

app.post('/contact', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
})

app.get('/profile/:name', (req,res) => {
    const data = {
        name : 'Ryu',
        job : 'Ninja',
        age : 29, 
        hobbies: ['Eating', 'Fishing', 'Fighting', 'Ngising']
    }
    res.render('profile', {person: req.params.name, data: data});
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})