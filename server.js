const express = require("express")

const app = require("liquid-express-views")(express())

const port = 3000

const budget = require("./model/budget.js")

app.get("/budgets", (req, res) => {
  res.render("index")
})

app.get("/budgets/:index", (req, res) => {
  res.render("show")
})

app.get("/budgets/new", (req, res) => {
  res.render("new")
})

app.post("/budgets/new", (req, res) => {
  res.redirect("budgets")
})
