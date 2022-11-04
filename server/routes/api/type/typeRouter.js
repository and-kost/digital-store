const Router = require('express')
const router = new Router()
const TypeController = require('./typeController')
const checkRole = require('../../../middlewares/checkRole')

router.post('/', checkRole('admin'), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router
