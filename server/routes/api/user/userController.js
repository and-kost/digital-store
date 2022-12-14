const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError = require('../../../utils/errors/ApiError')
const {User, Basket} = require('../../../models/models')
const {generateJwt} = require('../../../utils/jwt');

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('No email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('An email already is used'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({
            email,
            role,
            password: hashPassword
        })
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, email, user.role)
        res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.forbidden('A user with the email is not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.forbidden('Wrong password'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async isAuthenticated(req, res, next) {
        const token = generateJwt(req.user.id, req.user.id, req.user.role)
        return res.json(token)
    }
}

module.exports = new UserController()
