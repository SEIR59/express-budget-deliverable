const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

// app.get('/', (req, res) =>{
//     res.send("If you see me I work.")
// })

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render(
        'index',
    )
})

app.listen(port, ()=> {
    console.log("Now Listening to Port 3000 :)")
})