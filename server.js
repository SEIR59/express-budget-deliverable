const express = require('express');
const app = require('liquid-express-views')(express());
const port = 3000;
const methodOverride = require('method-override');
const Budget = require('./models/budget')

//! Middlewares
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

//? Index route
app.get('/budgets', (req, res) => {
  res.render('index', {Budget});
});

//? Show route
app.get('/budgets/:index', (req, res) => {
    res.render('show', {budget: Budget[req.params.index]})
});

//? New route
app.get('/budgets/new', (req, res) => {});

//? Create route
app.post('/budgets', (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
