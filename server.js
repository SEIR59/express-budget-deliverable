const express = require('express');
const budget = require('./models/budget.js')
const app = require("liquid-express-views")(express())


app.use(express.static('public'))


app.use(express.urlencoded({extended:false}));




app.get('/' , (req, res) =>{
    res.send('hello world')
})


app.get('/budget', (req, res) => {
    res.render("index", {
        budget: budget
    })
})

app.get('/budget/new', (req, res) => {
    res.render('new')
})

app.get('/budget/:indexOfBudgetArray', (req, res) => {
    res.render("show", {
        budgetItem: budget[req.params.indexOfBudgetArray] 
    })
 })

app.listen(port, () =>{
    console.log("listen to port 3000")
})