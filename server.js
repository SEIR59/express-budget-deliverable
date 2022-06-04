const express = require('express');
const budget = require('./models/budget');
const app = require("liquid-express-views")(express());
let bankAccount = 0
const totalBudget = (array) => {
    bankAccount = 0
    array = budget
    array.forEach(charge => {
        bankAccount += parseInt(charge.amount)
    })
}

budget.forEach(charge => {
    bankAccount += charge.amount

})

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/budget/new', (req, res) => {
    res.render('new', {
    })
})

app.get('/budget', (req, res) => {
    totalBudget()
    res.render('index', {
        budget: budget,
        bank: bankAccount
    })
})


app.get('/budget/:play', (req, res) => {
    // console.log(budget[req.params.play])
    res.render('show', {
        budget: budget[req.params.play]
    })
})

app.post('/budget', (req, res) =>{
    budget.push(req.body)
    res.redirect('/budget')
})


app.listen(3000, () => {
    console.log("I am listening for requests!!!");
});