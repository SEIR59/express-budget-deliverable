const express = require('express')
const app = require('liquid-express-views')(express())

const budget = require('./models/budget.js')
let bankAccount = 1000
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));


app.get('/budgets', (req,res)=>{
    let backgroundColor
    bankAccount < 0 ? backgroundColor = 'red' : bankAccount < 1000 ? backgroundColor= 'blue' : backgroundColor = 'green'
    
    res.render('index', {
        budgets: budget,
        bankAccount: `<h2 style="background:${backgroundColor}">Current Savings: ${bankAccount}</h2>`
    })
})

app.get('/budgets/new', (req,res)=>{
    res.render('new')
})

app.get('/budgets/:index', (req,res)=>{
    res.render('show',{
        item: budget[req.params.index],
        itemTags: budget[req.params.index].tags.join(', ')
    })
})

app.post('/budgets', (req,res)=>{
    req.body.tags = req.body.tags.split(',')
    budget.push(req.body)
    res.redirect('/budgets')
})


app.listen(3000, ()=>{
    console.log('Listening')
})