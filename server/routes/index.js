const Router = require('express')
const router = new Router()
const userRouter = require('./api/user/userRouter')
const typeRouter = require('./api/type/typeRouter')
const brandRouter = require('./api/brand/brandRouter')
const deviceRouter = require('./api/device/deviceRouter')

router.use('/users', userRouter)
router.use('/types', typeRouter)
router.use('/brands', brandRouter)
router.use('/devices', deviceRouter)

module.exports = router
