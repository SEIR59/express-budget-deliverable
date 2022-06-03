const express = require('express')
const budget = require('./models/budget')
const app = require('liquid-express-views')(express())
const port = 3000


app.use(express.static('public'))
// app.use(express.json());
// app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello Badoogaler Alert')
})
 
app.use(express.urlencoded({extended: false}))


app.get('/index', (req, res) => {
    res.render('index', {
        myBudget: budget
    })
})
app.post('/index', (req, res) => {
    
    res.send(req.body)
    
    
})


app.get('/index/new/', (req, res) => {
    res.render('new')
})




app.get('/index/:show', (req, res) => {
    res.render('show', {
        showBud: budget[req.params.show]
    })
})


app.listen(port, () => {
    console.log('we are live on 3000')
})