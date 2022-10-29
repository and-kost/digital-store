const Router = require('express')
const router = new Router()
const userRouter = require('./api/user/userRouter')
const typeRouter = require('./api/type/typeRouter')
const brandRouter = require('./api/brand/brandRouter')
const deviceRouter = require('./api/device/deviceRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router
