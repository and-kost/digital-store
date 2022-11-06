const Router = require('express')
const router = new Router()
const BrandController = require('./brandController')
const checkRole = require('../../../middlewares/checkRole')

router.post('/', checkRole('ADMIN'), BrandController.create)
router.get('/', BrandController.getAll)

module.exports = router
