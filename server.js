const express = require('express');
const budget = require('./models/budget');
const app = require("liquid-express-views")(express());

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/budget', (req, res) => {
    res.render('index', {
        budget: budget,
    })
})



app.listen(3000, () => {
    console.log("I am listening for requests!!!");
});