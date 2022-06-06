const express = require('express')
const app = require('liquid-express-views')(express())

const budget = require('./models/budget.js')

app.use(express.static('public'))

app.get('/budgets', (req,res)=>{

    res.render('index', {
        budgets: budget
    })
})

app.get('/budgets/new')

app.get('/budgets/:index')

app.post('/budgets')


app.listen(3000, ()=>{
    console.log('Listening')
})