const express = require('express');
const budget = require('./models/budget.js')
const app = require("liquid-express-views")(express())
const port = 3000

app.use(express.static('public'))


app.use(express.urlencoded({extended:false}));




app.get('/' , (req, res) =>{
    res.send('hello world')
})


app.get('/budget', (req, res) => {
    res.render("index")
})


app.listen(port, () =>{
    console.log("listen to port 3000")
})