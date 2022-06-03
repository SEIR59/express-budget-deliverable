const express = require("express");
const { traceDeprecation } = require("process");
const app = require("liquid-express-views")(express());
const budget = require("./models/budget.js");

const port = 3000;

app.listen(port, () => {
  console.log("app is running on port: ", port);
});

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hi");
});

// "Homepage"
app.get("/budgets", (req, res) => {
  res.render("index", {
    allBudgets: budget,
  });
});

// Post
app.post("/budgets", (req, res) => {
  console.log(req.body);
  budget.push(req.body);
  console.log(budget);
  res.redirect("/budgets");
});

// New
app.get("/budgets/new", (req, res) => {
  res.render("new");
});

// Index
app.get("/budgets/:index", (req, res) => {
  res.render("show", { budgets: budget[req.params.index] });
});

// bankAccount
// let bankAccount = document.getElementById("amount");

// if (bankAccount.innerHTML >= 1000) {
//   bankAccount.style.backgroundColor = "green";
// }
