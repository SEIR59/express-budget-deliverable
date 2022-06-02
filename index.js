const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000;

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.static('public'))
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

const budgetItems = require('./models/budget.js')
let bankAccount = 0;

let addMoney = () =>{
    for(item of budgetItems){
        bankAccount += item.amount
    }
}
addMoney()

app.listen(port, () =>{
    console.log('listening on port:', port)
})

// app.get('/', (req,res) =>{
//     res.send("Hello World")
// })

app.get('/', (req,res) =>{
   res.render('index',
   {
       allBudgetItems: budgetItems,
       money:bankAccount

})
})

app.get('/new', (req,res) =>{
    res.render('new')
})

app.post('/', (req,res) =>{
    budgetItems.push(req.body)
    bankAccount = 0;
    addMoney();
    res.redirect('/')
    
})


app.get('/:indexOfBudgetItems', (req,res) =>{
    res.render('show',{
        item:budgetItems[req.params.indexOfBudgetItems]
    })
})

