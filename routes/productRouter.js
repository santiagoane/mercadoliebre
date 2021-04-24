const express = require ('express')
const router = express.Router();

const controller = require ('../controller/productController')

//router.get ('cart', controller.cart);

router.get ('create', controller.create );

console.log('áca lllegaste?');

module.exports = router;
