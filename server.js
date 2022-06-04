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
app.get('/budget/:play', (req, res) => {
    res.render('show', {
        somethingToshow: budget[req.params.play]
    })
})



app.listen(3000, () => {
    console.log("I am listening for requests!!!");
});