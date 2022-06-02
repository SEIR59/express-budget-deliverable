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





app.get("/", (req, res) => {
  res.render(
    "index", //index.Liquid 
    {
      //controller
      allBudgetItems: Budget
    })
})


















//Port
app.listen(2000, () => {
    console.log("port 2000 is working");
  });