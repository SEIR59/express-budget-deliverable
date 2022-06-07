//Require these imports to run code
const express = require('express');
const budget = require('./Models/budget');
const app = require("liquid-express-views")(express());
const Budget = require('./Models/budget');
//Sets port number
const port = 3000;

//General use for all routes
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//Middleware, for post method
app.use(express.urlencoded({extended:false}));

//Sets a total for the current bank account balance
let bankAccount = 0;
app.get('/budget', (req, res) =>{
    res.render('index', {
        allBudgets:Budget,
        theBankAccount:bankAccount,
    });
});

//Directs to the new budget submission area
app.get('/budget/new', (req, res) => {
    res.render('new',
        {
            
        })
});

//Posts a new budget
app.post('/budget/new', (req, res) => {
    Budget.push(req.body)
    res.redirect("/budget")
});

//Redirects to the specific budget, displays in a good format
app.get('/budget/:index', (req, res) => {
    res.render('show',
        {
            budget: Budget[req.params.index],
        })
});


//Listens to the 3000 port
app.listen(port, () => {
    console.log('listening');
});