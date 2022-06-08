const express = require('express')
const res = require('express/lib/response')
const app = require('liquid-express-views')(express())
const Budget = require('./models/budget.js')
app.use(express.static('public'))
const port = 3203
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
	console.log(`Listening on port ${port}!!`)
})

app.get('/budgets', (req, res) => {
	res.render('index',{ budgets: Budget})
})

app.get('/budgets/new', (req, res) => {
	res.render('new')
})

app.get('/budgets/:indexOfBudgetData', (req, res) => {
	res.render('show', {
		item: budgetData[req.params.indexOfBudgetData],
	})
})
