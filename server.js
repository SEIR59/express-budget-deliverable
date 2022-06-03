const express = require('express');
const app = require('liquid-express-views')(express());
const port = 3000;
const methodOverride = require('method-override');
const Budget = require('./models/budget');
let bankAccount = 0;

// window.localStorage.setItem('budgetList', Budget)

//! Middlewares
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

const getTotalBalance = () => {
  bankAccount = 0;
  Budget.forEach((item) => {
    bankAccount += parseInt(item.amount);
  });
};

//? Index route
app.get('/budgets', (req, res) => {
  getTotalBalance();
  res.render('index', { Budget, bankAccount });
});

//? New route
app.get('/budgets/new', (req, res) => {
  res.render('new');
});

//? Show route
app.get('/budgets/:index', (req, res) => {
  res.render('show', { budget: Budget[req.params.index] });
});

//? Create route
app.post('/budgets', (req, res) => {
  req.body.amount = parseInt(req.body.amount);
  console.log(req.body);
  Budget.push(req.body);
  res.redirect('/budgets');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
