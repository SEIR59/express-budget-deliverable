const express = require('express');
const app = require("liquid-express-views")(express());
const Budget = require('./Models/budget');

const port = 3000;

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) =>{
    res.send('Hello');
});      

app.get('/budgets', (req, res) =>{
    res.render('index');
});
/*
app.get('/budgets/new', function(req, res){
    res.render('');
});      

app.get('/budgets/:index', function(req, res){
    res.render('');
});      

app.post('/budgets', function(req, res){
    
});      */

app.listen(port, () => {
    console.log('listening');
});