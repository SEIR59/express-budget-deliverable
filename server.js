const express = require('express')
const app = require("liquid-express-views")(express())
const Budget = require('./models/budget.js')



let port = 3000

app.listen(port, ()=>{
    console.log("Using port: ", port)
})

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render('index', {
        Budget: Budget
    })
})