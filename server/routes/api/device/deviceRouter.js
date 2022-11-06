const Router = require('express')
const router = new Router()
const DeviceController = require('./deviceController')
const checkRole = require('../../../middlewares/checkRole')

router.post('/', checkRole('ADMIN'), DeviceController.create)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)

module.exports = router
