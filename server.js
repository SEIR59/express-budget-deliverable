const express = require("express")

const app = require("liquid-express-views")(express())

const port = 3000

const budget = require("./model/budget.js")

app.use(express.static("public"))

app.use((req, res, next) => {
  console.log("I run for all routes")
  next()
})

app.use(express.urlencoded({ extended: false }))

app.get("/budgets", (req, res) => {
  res.render("index", {
    allBudgets: budget,
  })
})

app.get('/budgets/new', (req, res) => {
  res.render('new')
})

app.post("/budgets/new", (req, res) => {
  console.log(req.body)
  budget.push(req.body)
  res.redirect("/budgets")
})

app.get("/budgets/:index", (req, res) => {
  res.render("show", {
    budget: budget[req.params.index]
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
