const Router = require('express')
const router = new Router()
const userController = require('./userController')
const authMiddleware = require('../../../middlewares/Auth')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.isAuthenticated)

module.exports = router
