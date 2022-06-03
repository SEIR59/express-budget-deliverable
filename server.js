const express = require('express')
const app = require("liquid-express-views")(express())
const budget = require('./models/budget.js')

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/budgets', (req, res) => {
    res.send('Budgets')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

