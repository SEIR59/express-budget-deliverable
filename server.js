const express = require('express');
const app = require("liquid-express-views")(express());
app.use(express.static('public'));

const budget = require('./models/budget.js')
app.use(express.urlencoded({ extended: false}));

let bankAcoount = 0;

let sum = function() {

    budget.forEach((item) => {
        bankAcoount += parseInt(item.amount)
    })
}

app.get('/budgets', (req, res) => {
    sum();
    console.log(bankAcoount)
res.render('index', {
    budgetAll: budget,
    sum: bankAcoount
})
});

app.get('/budgets/new', (req, res) => {
    res.render('new',{})
});

app.get('/budgets/:index', (req, res) => {
    res.render('show', {
        budget: budget[req.params.index]
    })
});



app.post('/budgets', (req, res) => {
    console.log(req.body);
    budget.push(req.body);
    res.redirect('/budgets');
});



app.listen(3000, () => {
    console.log("listening");
  });
  