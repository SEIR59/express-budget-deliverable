const expr = require("express")
const app = require("liquid-express-views")(expr())
const port = 3000

app.get("/",(req,res) => {
    res.send("This is the - '/ get' - path")
})

app.get("/budgets",(req,res) => {
    res.send("This is the - '/budgets GET' - path")
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