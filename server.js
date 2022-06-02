const express = require('express')
const app = require('liquid-express-views')(express())

app.listen(4000, () => {
    console.log('listen to port 4000')
})

app.use(express.static('public'))

app.get('/', (req ,res) => {
    res.render('index')
})