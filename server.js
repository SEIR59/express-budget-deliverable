const express = require('express')
const budgets = require('./models/budget.js')
const app = require('liquid-express-views')(express())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
const methodOverride = require("method-override")
let sum = 0;


budgets.forEach(element => {
    sum += element.amount;
  });
  console.log(sum);

app.use(methodOverride("_method"))


app.get('/', (req, res) => {
    res.send("hello")
})

//Delete Budget//
app.delete('/budgets/:indexOfBudgetsArray', (req,res)=>{
    budgets.splice(req.params.indexOfBudgetsArray, 1)
    res.redirect('/budgets')
})

//New Budget//
app.get('/budgets/new', (req, res) => {
    res.render('new')
})

app.post('/budgets', (req, res) => {
    budgets.push(req.body);

    res.redirect('/budgets');
});

//Index Route//

app.get('/budgets/', (req, res) => {
    res.render(
        'index.liquid',
        {
            allBudgets: budgets
        }
    )
})

//Show Route//

app.get('/budgets/:indexOfBudgetsArray', (req, res) => {
    res.render('show', {
        budgets: budgets[req.params.indexOfBudgetsArray]
    })
})



app.listen(3000, () => {
    console.log("listning to port 3000")
})