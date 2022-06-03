const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello Badoogaler Alert')
})

app.get('/index', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('we are live on 3000')
})