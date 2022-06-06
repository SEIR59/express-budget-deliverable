const express = require("express");
const app = require("liquid-express-views")(express());
const port = 3000;
const budget = require("./budget");

app.get("/", (req, res) => {
  res.send("First HTML Page Renders Fine");
});

app.get("/budgets", (req, res) => {
  res.render("index");
});

app.get("/budgets/new", (req, res) => {
  res.render("new");
});

app.get("/budgets/:index", (req, res) => {
  res.render("show");
});

app.listen(port, () => {
  console.log("This Port is working Fine");
});
