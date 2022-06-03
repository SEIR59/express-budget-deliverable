const express = require ("express");
const app = require("liquid-express-views")(express())
const budgets = require("./models/budget.js")

app.use(express.urlencoded({ extended: false }))
/*app.get("/budgets", (req, res) => {
  res.send(budgets)
})*/

app.get("/budgets", (req, res) => {
  totalBudget(bankAccount)
  res.render("index", {
  allBudgets: budgets,
  bankAccount: bankAccount
  })
})

app.get("/budgets/new", (req,res) => {
  res.render("new")
})
app.get("/budgets/:index", (req, res) => {
  res.render("show", {
   budgets: budgets[req.params.index]
  })
})

app.post("/budgets", (req, res) => {
  budgets.push(req.body)
  res.redirect('/budgets')
})

let bankAccount = 0;

const totalBudget = (array) => {
  bankAccount = 0
  for (let i = 0; i < budgets.length; i++){
      bankAccount += parseInt(budgets[i].amount)
  }
}











app.listen(3000, () => {
  console.log("my pockets are listening");
});