const express = require('express');
const app = require("liquid-express-views")(express());
const Budget = require('./Models/budget');

const port = 3000;

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

app.get('/budget', (req, res) =>{
    res.render('index', {
        allBudgets:Budget
    });
});

app.get('/budget/:index', (req, res) => {
    res.render('show',
        {
            budget: Budget[req.params.index],
        })
});

app.listen(port, () => {
    console.log('listening');
});