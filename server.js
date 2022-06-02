const express = require('express')
const app = require("liquid-express-views")(express())
const budget = require('./models/budget.js')

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

