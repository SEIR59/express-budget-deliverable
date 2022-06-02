const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

app.get('/', (req, res) => {
    res.send('hello there')
})

app.listen(port, () => {
    console.log('listening on port: ' + port)
})

// express.static()