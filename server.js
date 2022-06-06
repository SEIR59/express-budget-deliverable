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

app.use((req, res, next) => {
  console.log("Testing Middleware");
  next();
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.post("/budgets", (req, res) => {
  res.send("First Post Test of Syntax");
});
