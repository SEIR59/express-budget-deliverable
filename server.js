const express = require('express');
const res = require('express/lib/response');
const app = require("liquid-express-views")(express());
const port = 3000;
const budget = require('./models/budget.js');

//express function body parser middleware
app.use(express.urlencoded({extended: false}));

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'


// app.get('/', (req,res) => {
//     res.send(`Hello, World!!!`)
// })
// Show route


app.get('/', (req,res) =>{
    res.render('index', {allBudgetItems: budget})
});

app.post('/', (req,res) =>{
    budget.push(req.body);
    res.redirect('/')
})


app.get('/new', (req,res) => {
    res.render('new')
})


app.get('/:indexOfBudget', (req,res) => {
    res.render('show', {
        budgetItem: budget[req.params.indexOfBudget]
    })
});

app.listen(port, () => {
    console.log(`Listening`)
    // console.log(budget)
})