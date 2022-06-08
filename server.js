const budget = require('./models/budget.js')
const port = 3000

app.use(express.static('public'))
//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


app.listen(port, () =>{
    console.log("listen to port 3000")
})
app.get('/' , (req, res) =>{
    res.send('hello world')
})