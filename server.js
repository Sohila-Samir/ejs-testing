const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 2021;
const serverJsonData = require('./data.json');

//required to make the css style sheets work on ejs files
app.use(express.static(path.join(__dirname, '/puplic')))

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.listen(port, () => {
})

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/wlc/:name', (req, res) => {
    //destructring the req param from the url
    let {name} = req.params;
    res.render('testing', { name });
})

app.get('/cond/:name', (req, res) => {
    let {name} = req.params;
    res.render('conditionals', { name });
})

app.get('/looping', (req, res) => {
    let arr1 = ["how deep", "is", "your love ...?"];
    res.render('loops', { names : arr1 });
})

app.get('/r/:subraddit', (req, res) => {
    let { subraddit } = req.params;
    let radditData =  serverJsonData[subraddit];
    res.render('subraddits', { ...radditData })
})