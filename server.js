//Necessary
const express = require('express')
const app = require("liquid-express-views")(express());
const Budget = require('./models/budget.js')

//
app.use((req, res, next) => {
  console.log('I run for all routes')
  next()
})

//how we are connecting our css page
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

//
app.use(express.urlencoded({extended:false}));


// app.get('/', (req, res) => {
//   res.send('Hello world 2')
// })



app.get("/budget", (req, res) => {
  res.render(
    "index", //index.Liquid 
    {
      //controller
      allBudgetItems: Budget
    })
})

app.get('/budget/new', (req, res) => {
  res.render('new')
})

app.get("/budget/:indexOfBudget", (req, res) => {
  res.render("show", {
    budgetItem: Budget[req.params.indexOfBudget]
  })
})


















//Port
app.listen(2000, () => {
    console.log("port 2000 is working");
  });