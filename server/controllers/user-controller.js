const userService = require('../service/user-service')

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, username} = req.body
            const userData = await userService.registration(email, password, username)

            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await userService.login(email, password)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {token} = req.body
            const tokenData = await userService.logout(token)
            if(tokenData) return res.sendStatus(200)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()