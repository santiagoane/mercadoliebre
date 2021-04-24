let visitados = require ('../data/datosProductos')

let homeController = {


    leerTodos: (req,res) => {

        console.log('leo los productos desde data');
    
        const products = [...visitados]

        res.render("home", {products})

    }        
            
    }


module.exports = homeController