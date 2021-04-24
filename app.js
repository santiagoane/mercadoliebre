const express = require('express')
const app = express()
const port = process.env.PORT;

const homeRouter = require('./routes/homeRouter')
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')

const path = require('path');

const methodOverride = require('method-override')   
// Requerimos este módulo para asegurar compatibilidad de métodos PUT y DELETE en todos los navegadores.
app.use(methodOverride('_method'))
// Para configurarlo indicamos a app que use este método, con app.use lo empleamos a nivel aplicación.


app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
app.set('view engine', 'ejs')

// llamo al ruteo
app.use('/', homeRouter)
app.use('/', userRouter)
app.use('/products', productRouter)


app.listen(port || 3000 , () => {
    console.log('Example app listening on port ' );
});
