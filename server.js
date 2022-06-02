const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

app.listen(port, () => {
    console.log('Listening on Budget Deliverable')
})

app.get('/', (req, res) => {
    res.send('test')
})