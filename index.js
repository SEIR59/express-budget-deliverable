const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000;

const budgetItems = require('./models/budget.js')

app.listen(port, () =>{
    console.log('listening on port:', port)
})

// app.get('/', (req,res) =>{
//     res.send("Hello World")
// })

app.get('/', (req,res) =>{
   res.render('index',{allBudgetItems: budgetItems})
})

app.get('/:indexOfBudgetItems', (req,res) =>{
    res.render('show',{
        item:budgetItems[req.params.indexOfBudgetItems]
    })
})