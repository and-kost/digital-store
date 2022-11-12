const Router = require('express')
const router = new Router()
const DeviceController = require('./deviceController')
const checkRole = require('../../../middlewares/roleHandler')
const constants = require('../../../utils/constants')

router.post('/', checkRole(constants.ROLES.ADMIN), DeviceController.create)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)

module.exports = router
