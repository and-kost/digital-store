const jwt = require('jsonwebtoken')

module.exports = (role) => {
    return (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: 'No token in header'})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(403).json({message: 'You have not enough permissions'})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.sendStatus(401)
        }
    }
}
