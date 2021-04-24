let visitados = require('../data/datosProductos')

let productController = {

    // vamos con el controller de create!

    create: (req, res) => {
        console.log('quiero que me creen!');
        res.render('createProduct')
    }

    // No entiendo porque mandamos aca a products/cart si todavia no esta creada esa vista????
//a cart lo voy a agregar cuando llegue su momento!

  /*  cart: (res, req) => {
        console.log('soy el controlloador de cart');

        res.render('createProduct')
    }*/

}


module.exports = productController