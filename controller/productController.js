let visitados = require('../data/datosProductos')

let productController = {

    // vamos con el controller de create!

    create: (req, res) => {
        console.log('quiero que me creen!');
        res.render('createProduct')
    },

    // No entiendo porque mandamos aca a products/cart si todavia no esta creada esa vista????
//a cart lo voy a agregar cuando llegue su momento!

   cart: (req, res) => {
        res.send('cart')
    },

    // mostrará  los products

    show: (req, res) => {

        res.send ('aca estan los products')
    },

    search: (req,res) => {

        res.send ('resultado de busqueda')
    },

    edit: (req, res ) => {

        res.send ('estamos editando')
    },

    store: (req, res ) => {

        res.send ('guardando')
    },

    update: (req,res) => {
        res.send ('actualizando')
    },

    /*destroy: (req,res) => {

        res.send ('destruir')
    }*/


}

module.exports = productController