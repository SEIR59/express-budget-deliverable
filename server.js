const express = require('express')
const app = require('liquid-express-views')(express())
const budget = require('./models/budget.js')

app.use((req, res, next) => {
    console.log('run routes');
    next();
});

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        allItems: budget
    })
})

app.get('/new', (req, res) => {
    res.render('new')
})

app.get('/:index', (req, res) => {
    res.render('show', {
        allItems: budget[req.params.index]
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})
