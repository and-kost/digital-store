const Router = require('express')
const router = new Router()
const TypeController = require('./typeController')
const checkRole = require('../../../middlewares/checkRole')

router.post('/', checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router
