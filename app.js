const express = require('express')
const app = express()
const port = process.env.PORT;

const homeRouter = require('./routes/homeRouter')
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')

const path = require('path');
console.log('Santi Probando')


app.use(express.static('public'));


app.set('view engine', 'ejs')

// llamo al ruteo
app.use('/', homeRouter)
//app.use('/', userRouter)
//app.use('/products', productRouter)


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');

});

app.listen(port || 3000 , () => {
    console.log('Example app listening on port ' );
});
