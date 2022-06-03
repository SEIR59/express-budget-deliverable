const express = require('express');
const app = require("liquid-express-views")(express());
app.use(express.static('public'));

const budget = require('./models/budget.js')
app.use(express.urlencoded({ extended: false}));


app.get('/budgets', (req, res) => {
res.render('index', {
    budgetAll: budget
})
});

app.get('/budgets/new', (req, res) => {
    
});

app.get('/budgets/:index', (req, res) => {
    res.render('show', {
        budget: budget[req.params.index]
    })
});



app.post('/budgets', (req, res) => {
    
});



app.listen(3000, () => {
    console.log("listening");
  });
  