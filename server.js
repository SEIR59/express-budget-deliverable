const express = require('express')
const app = require("liquid-express-views")(express())
const budget = require ('./models/budget.js')

app.listen(3000,() => {

    console.log("working")

})

app.use(express.urlencoded({ extended: false }));
//css never worked. So I pasted the error message and found the solution(app.use(express.static(__dirname + '/public'));).
//but I can't understand what it means.Below is the address.
//https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type
app.use(express.static(__dirname + '/public'));


app.get('/index',(req,res) =>{
    // res.send("hello")
    res.render(
        'index',{
            allRecords: budget
        }
    )
})


app.get('/show/:index',(req,res) =>{
    // res.send("hello")
    res.render(
        'show',{
            record: budget[req.params.index]
        }
    )
})


app.get('/new', (req, res)=>{
    res.render('new')
    // budget.push(req.body);
    // console.log(budget);
    // res.send('data received');
    // res.redirect('/new');
});
