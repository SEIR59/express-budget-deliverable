const express = require('express');
const app = require("./node_modules/liquid-express-views")(express());
const budget = require('./budget')

const port = 3000;

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

app.listen(port, () => {
    console.log('listening');
});

app.get('/budgets', function(req, res){
    res.render('');
});      

app.get('/budgets/new', function(req, res){
    res.render('');
});      

app.get('/budgets/:index', function(req, res){
    res.render('');
});      

app.post('/budgets', function(req, res){
    
});      