const express = require('express')
const budget = require('./models/budget')
const app = require('liquid-express-views')(express())
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello Badoogaler Alert')
})

app.get('/index', (req, res) => {
    res.render('index', {
        myBudget: budget
    })
})

app.get('/index/:show', (req, res) => {
    res.render('show', {
        showBud: budget[req.params.show]
    })
})
// app.get('/fruits/:indexOfFruitsArray', function(req, res){
//     res.render('show', { //second param must be an object
//         fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the Liquid file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//     });
// }); 

app.listen(port, () => {
    console.log('we are live on 3000')
})