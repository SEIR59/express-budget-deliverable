const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const budget = require('./models/budget.js')
// app.get('/', (req, res) =>{
//     res.send("If you see me I work.")
// })

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render(
        'index', {
            budgets: budget
        }
    )
})

app.listen(port, ()=> {
    console.log("Now Listening to Port 3000 :)")
})