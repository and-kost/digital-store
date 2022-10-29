class UserController {
    async registration(req, res) {

    }
    async login(req, res) {

    }
    async isAuthenticated(req, res) {
        const query = req.query
        res.json(query)
    }
}

module.exports = new UserController()
