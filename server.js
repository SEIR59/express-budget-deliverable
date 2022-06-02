//Necessary
const express = require('express')
const app = require("liquid-express-views")(express());

//
app.use((req, res, next) => {
  console.log('I run for all routes')
  next()
})

//how we are connecting our css page
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'


//
app.use(express.urlencoded({extended:false}));







//Port
app.listen(3000, () => {
    console.log("port 3000 is working");
  });