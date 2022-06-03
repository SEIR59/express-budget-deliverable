const express = require('express')
const app = require("liquid-express-views")(express())
const budget = require("./models/budget.js")

////////////////////////////////////////////////////
app.use((req,res, next)=>{
    console.log("i run for all routes")
    next()
})
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
///////////////////////////////////////////////////

app.listen(3000, ()=>{
    console.log("listnening on port 3k")
})


app.get("/budgets", (req,res)=>{
    totalBudget(bankAccount)
    res.render("index", {
        budget:budget,
        bankAccount: bankAccount
    })
})

app.get("/budgets/new", (req,res)=>{
    res.render("new")
})

app.get("/budget/:index", (req,res)=>{
    res.render("show", {
        budget:budget[req.params.index]
      
    })
})


app.post("/budgets", (req,res)=>{
    // res.send(req.body)

    budget.push(req.body)
    res.redirect('/budgets')
})

let bankAccount=0;

const totalBudget = (total) => {
  bankAccount = 0
  for (let i = 0; i < budget.length; i++){
      bankAccount += parseInt(budget[i].amount)
  }
  
}
