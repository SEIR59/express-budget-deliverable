const express = require("express");
const app = require("liquid-express-views")(express());
const port = 3000;
const Budget = require("./models/budget.js")

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'


app.get('/budgtr',(req, res)=>{
    res.render("index",{budgtr: Budget})
})

app.listen(port,()=>{
    console.log("listening to port 3000")
})