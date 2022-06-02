const express = require('express');
const app = require('liquid-express-views')(express());
const port = 3000;
const methodOverride = require('method-override');

//! Middlewares
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

app.get('/budgets', (req, res) => {});

app.get('/budgets/:index', (req, res) => {});

app.get('/budgets/new', (req, res) => {});

app.post('/budgets', (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
