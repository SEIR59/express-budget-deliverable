const express = require('express')
const budgets = require ('./models/budget.js')
const app = require('liquid-express-views')(express())
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));



app.get('/',(req,res) => {
    res.send("hello")
})

//Index Route//

app.get('/budgets/', (req, res) => {
    res.render(
        'index.liquid',
        {
            allBudgets:budgets
        }
    )
})

//Show Route//

app.get('/budgets/:indexOfBudgetsArray', (req, res)=>{
    res.render('show', {
        budgets: budgets[req.params.indexOfBudgetsArray] 
    })
}) 




app.listen(3000,()=>{
    console.log("listning to port 3000")
})