const express = require('express')
const budgets = require('./models/budget.js')
const app = require("liquid-express-views")(express())
const budget = require('./models/budget.js')
const port = 3001
let bankaccount = 0

let addMoney = () =>{
    for( item of budget){
    itemnum = Number(item.amount)
    bankaccount += itemnum
}}
addMoney()

app.use(express.static('public'))
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


app.listen(port, () =>{
    console.log("listen to port 3000")
})
app.get('/' , (req, res) =>{
    res.send('hello world')
})
app.get('/budgets', (req, res) =>{
    res.render('index',
    {allbudget:budget,money:bankaccount})
})
app.post('/budgets', (req, res) =>{
    // console.log(req.body)
    budgets.push(req.body)
    bankaccount = 0
    addMoney()
    res.redirect('/budgets')
})
app.get('/budgets/new' , (req, res) =>{
    res.render('new')
})

app.get('/budgets/:index', (req, res) =>{
    res.render ('show',
    {budgets: budget[req.params.index]})
    // console.log(req.body)
})


