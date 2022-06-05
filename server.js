// Dependencies
const express = require("express");
const app = require("liquid-express-views")(express());
const budget = require("./models/budget.js");

// MIddleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));

// Port listening
app.listen(3000, () => {
    console.log("listening on port 3000!")
});

// test
app.get('/', (req, res) => {
    res.send("Hello World!")
})

// rendering the list of budget items 
app.get('/budgets', (req, res) => {
    res.render("index", {
        allBudgets: budget
    })
})

// rendering "new" page
app.get('/budgets/new', (req, res) => {
    res.render('new')
})

app.post("/budgets", (req, res) => {
    console.log(req.body)
    budget.push(req.body)
    res.redirect('/budgets')
})


// rendering each item on show page based on looped index 0,1,2 etc.
app.get("/budgets/:index", (req, res) => {
    res.render("show", {
        budgets: budget[req.params.index]
    })
})

app.get("/budgets/", (req, res) => {
        console.log("idk")
})




