let visitados = require ('../data/datosProductos')

let productController = {

    index: function(){
        console.log('leo los productos desde product controller');
        return visitados 
    },
}

module.exports = productController