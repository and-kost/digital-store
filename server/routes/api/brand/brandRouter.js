const Router = require('express')
const router = new Router()
const BrandController = require('./brandController')
const checkRole = require('../../../middlewares/roleHandler')
const constants = require('../../../utils/constants')

router.post('/', checkRole(constants.ROLES.ADMIN), BrandController.create)
router.get('/', BrandController.getAll)

module.exports = router
