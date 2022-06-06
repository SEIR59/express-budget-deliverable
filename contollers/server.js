const express = require('express')
const app = require('liquid-express-views')(express())




app.get('/budgets')

app.get('/budgets/new')

app.get('/budgets/:index')

app.post('/budgets')
