const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

app.listen(port, () => {
    console.log(`port 3000 listens`)
})

app.get('/', (req, res) => {
    res.send(`Hello Tran!`)
})