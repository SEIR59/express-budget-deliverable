const express = require("express");
const app = require("liquid-express-views")(express());
const port = 3000;
let budget = require("./models/budget.js");
let bankAccount = 0;

app.get("/", (req, res) => {
  res.send("First HTML Page Renders Fine");
});

app.get("/budgets", (req, res) => {
  res.render("index", {
    theBudgets: budget,
    accountBalance: bankAccount,
  });
});

app.get("/budgets/new", (req, res) => {
  res.render("new");
});

app.get("/budgets/:index", (req, res) => {
  res.render("show", {
    budgetName: budget[req.params.index],
  });
});

app.listen(port, () => {
  console.log("This Port is working Fine");
});

app.use((req, res, next) => {
  console.log("Testing Middleware");
  next();
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.post("/budgets", (req, res) => {
  budget.push(req.body);
  res.redirect("/budgets");
  console.log("First Post Test of Syntax");
});
