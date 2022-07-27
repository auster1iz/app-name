const jwt = require('jsonwebtoken')
const tokenModel = require('../models/token-model')

class TokenService {

    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '200m'})
        return accessToken
    }

    async saveToken (userId, accessToken) {
        const tokenData = await tokenModel.findOne({user: userId})
        if(tokenData) return
        return await tokenModel.create({user: userId, token: accessToken})
    }

    async removeToken(token) {
        const tokenData = await tokenModel.deleteOne({token})
        return tokenData
    }
}

module.exports = new TokenService()