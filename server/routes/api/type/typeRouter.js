const Router = require('express')
const router = new Router()
const TypeController = require('./typeController')
const checkRole = require('../../../middlewares/roleHandler')
const constants = require('../../../utils/constants')

router.post('/', checkRole(constants.ROLES.ADMIN), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router
