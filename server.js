const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

app.get('/', (req, res) =>{
    res.send("If you see me I work.")
})


app.listen(port, ()=> {
    console.log("Now Listening to Port 3000 :)")
})