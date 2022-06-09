const express = require('express')
const budgets = require ('./models/budget.js')
const app = require('liquid-express-views')(express())
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));



app.get('/',(req,res) => {
    res.send("hello")
})



app.get('/budgets/', (req, res) => {
    res.render(
        'index.liquid',
        {
            allBudgets:budgets
        }
    )
})


app.listen(3000,()=>{
    console.log("listning to port 3000")
})