const express = require('express');
const app = require("liquid-express-views")(express());
app.use(express.static('public'));

const budget = require('./models/budget.js')
app.use(express.urlencoded({ extended: false}));


app.get('/bugets', (req, res) => {

});

app.get('/bugets/new', (req, res) => {
    
});

app.get('/bugets/:index', (req, res) => {
    
});



app.post('/budgets', (req, res) => {
    
});



app.listen(3000, () => {
    console.log("listening");
  });
  