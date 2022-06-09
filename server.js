const express = require('express')
const app = require("liquid-express-views")(express())
const Budget = require('./models/budget.js')



let port = 3000

app.listen(port, ()=>{
    console.log("Using port: ", port)
})

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        Budget: Budget
    })
})

app.post('/create', (req, res) => {
    Budget.push(req.body)
    res.redirect('/')
})

app.get('/:id', (req, res) => {
    res.render('show', {
        Budget: Budget,
        number: req.params.id
    })
})


app.post('/next', (req, res) => {
    res.redirect('/')
})

app.post('/new', (req, res) => {
    res.render('new')
})