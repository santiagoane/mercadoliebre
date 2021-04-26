const express = require ('express')
const router = express.Router();

const controller = require ('../controller/productController')

router.get ('/cart', controller.cart);

router.get('/create', controller.create);

router.get('/search', controller.search)

router.post ('/store' , controller.store)

router.put ('/:id', controller.update)

//router.delete ('/:id', controlller.destroy)

router.get ('/:id/edit' , controller.edit)

router.get('/:id', controller.show)

console.log('áca lllegaste?');

module.exports = router;
