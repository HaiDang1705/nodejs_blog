const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));

console.log('PATH: ', path.join(__dirname, 'resource/views')); // PATH:  F:\F8\Node\src\resource\views

// app.METHOD(PATH, HANDLER)
// src/resource/views/home.
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    console.log(req.query.name);
    console.log(req.query.age);
    console.log(req.query.keywords);
    res.render('news');
});

app.get('/search', (req, res) => {
    // console.log(req.query.q);
    res.render('search');
});

app.post('/search', (req, res) => {
    // console.log(req.query.q);
    res.render('search');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));