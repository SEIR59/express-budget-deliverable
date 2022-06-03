const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

app.listen(port, () => {
    console.log(`port 3000 listens`)
})

// test middleware
app.use((req, res, next) => {
    console.log(`I run for all route`)
    next()
})

// tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'))

// allow us to access data that posting. Can be use add, edit, put, etc. i.e. allow developers use more than just get and post route
app.use(express.urlencoded({extended: false}))

app.post('/budgets', (req, res) => {
    res.send(
        'I am post'
    )
})

app.get('/', (req, res) => {
    res.send(`Hello Tran!`)
})

app.get('/budgets', (req, res) => {
    res.render(
        'index'
    )
})

app.get('/budgets/new', (req, res) => {
    res.render(
        'new'
    )
})

app.get('/budgets/:index', (req, res) => {
    res.render(
        'show'
    )
})

