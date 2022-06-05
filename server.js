const express = require("express");
const app = require("liquid-express-views")(express());
const budget = require("./models/budget.js");

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));

app.listen(3000, () => {
    console.log("listening on port 3000!")
});

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/budgets', (req, res) => {
    res.render("index", {
        allBudgets: budget
    })
})

app.get('/budgets/new', (req, res) => {
    res.render('new')
})

app.get("/budgets/:index", (req, res) => {
    res.render("show", {
        budgets: budget[req.params.index]
    })
})



