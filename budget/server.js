const express = require('express')
const res = require('express/lib/response')
const app = require('liquid-express-views')(express())
const port = 3201

app.listen(port, () => {
	console.log(`Listening on port ${port}!!`)
})

app.get('/', (req, res) => {
	res.send('Welcome to the Express Budget App!')
})