const express = require('express');
const budget = require('./Models/budget');
const app = require("liquid-express-views")(express());
const Budget = require('./Models/budget');

const port = 3000;

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

let bankAccount = 0;
app.get('/budget', (req, res) =>{
    res.render('index', {
        allBudgets:Budget,
        theBankAccount:bankAccount,
    });
});

app.get('/budget/new', (req, res) => {
    res.render('new',
        {
            
        })
});

app.post('/budget/new', (req, res) => {
    Budget.push(req.body)
    res.redirect("/budget")
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