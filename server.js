// Global variables
const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const budget = require('./models/budget')

// Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));


// Routes
app.get('/', (req, res) => {
    res.render('index', 
    {
        allBudgetItems : budget
    })
})

app.get('/:index', (req, res) => {
    res.render('show', 
    {
        budgetItem : budget[req.params.index]
    })
})



// Listen
app.listen(port, () => {
    console.log('listening on port: ' + port)
})

// express.static()