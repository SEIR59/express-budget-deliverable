//Necessary
const express = require('express')
const app = require("liquid-express-views")(express());


app.use((req, res, next) => {
  // console.log('I run for all routes')
  next()
})
//how we are connecting our css page
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'

//
app.use(express.urlencoded({extended:false}));

//Bank Account -----------------

const Budget = require('./models/budget.js')
let bankAccount = 0

let addMoney = () => {
  for(item of Budget)
  //have to turn numbers into actual number
  itemNum = Number(item.amount)
   bankAccount+= itemNum
}
addMoney()
//-------------------------------------



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


app.post('/budget', (req, res) => {
  // console.log(req.body)
  Budget.push(req.body)
  bankAccount = 0
  addMoney()
  console.log(bankAccount)
  res.redirect('budget')
})















//Port
app.listen(2000, () => {
    // console.log("port 2000 is working");
  });