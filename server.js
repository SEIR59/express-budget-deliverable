// set up variables for server
const expr = require("express")
const app = require("liquid-express-views")(expr())
const port = 3000
// allows for use of req.body data
app.use(expr.urlencoded({extended: false}))
// sets public as the default file to search in for files (ex: .css/.js)
app.use(expr.static("public"))

const Budget = require("./models/budget.js")

/*====================
        Routes
====================*/
app.get("/",(req,res) => {
    res.send("This is the - '/ get' - path")
})

app.get("/budgets",(req,res) => {
    // res.send("This is the - '/budgets GET' - path")
    res.render("index",{
        BudgetList: Budget
    })
})

app.get("/budgets/new",(req,res) => {
    res.send("This is the - '/budgets/new GET' - path")
})
app.get("/budgets/:index",(req,res) => {
    res.send("This is the - '/budgets/:index GET' - path")
})
app.post("/budgets",(req,res) => {
    res.send("This is the - '/budgets POST' - path")
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})