
const express = require('express')
const req = require('express/lib/request')
const { send } = require('express/lib/response')
const res = require('express/lib/response')
const app = require('liquid-express-views')(express())
const budget = require('./models/budget')
const sumall = budget.map(item => item.amount).reduce((prev, curr) => prev + curr, 0);
console.log(sumall);
let account = sumall 



// //create a func to iterate through budget and add the amounts together


// const bodyParser = require('body-parser')
app.use(express.static('public'))
// mvc stands for model view controller




app.use('/index', (res, req, next) => {
    console.log('i run for all routes')
    
    next()
})

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("Hello")
})


app.get('/index/', (req, res) => {
    
    
     res.render(
        'index',
        {
            theBud: budget,
            account: account
        }
    )
    
})

app.post('/index', (req, res) => {
   
   
    
    budget.push(req.body)
    
     
    console.log(budget)
    
    res.redirect('/index')
})

app.get('/index/new', (req, res) => {
    res.render('new')
})

app.get('/index/:show', function(req, res){
    res.render('show', { //second param must be an object
        showBud: budget[req.params.show] //there will be a variable available inside the Liquid file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});    



app.listen(3000, () => {
    console.log('youre on 3000 bitch')
    
})



const balance = (arr) => {
    for(let i=0; i<arr.length; i++){
    account = account + arr[i].amount
    }
    }

//     const addValue = (arr) => {
    
//     newVar = budget.at(-1)
//     account = account + newVar.amount 
// }
    

    
    // console.log(budget)
    // console.log(account)