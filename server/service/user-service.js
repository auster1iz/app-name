const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const tokenService = require('../service/token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(email, password, username) {
       const userFoundByEmail = await UserModel.findOne({email})
       const userFoundByUsername = await UserModel.findOne({username})
        if(userFoundByEmail) {
            throw ApiError.BadRequest('User with this email already exists')
        }
        if(userFoundByUsername) {
            throw ApiError.BadRequest('This username is taken')
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await UserModel.create({email, password: hashPassword, username})

        const userDto = new UserDto(user)
        const token = tokenService.generateToken({...userDto})

        await tokenService.saveToken(userDto.id, token)

        return { token, user: userDto }
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        if(!user) {
            throw ApiError.BadRequest('User with this email does not exist')
        }

        const isPasswordsEqual = await bcrypt.compare(password, user.password)
        if(!isPasswordsEqual) {
            throw ApiError.BadRequest('Wrong password')
        }

        const userDto = new UserDto(user)
        const token = tokenService.generateToken({...userDto})

        await tokenService.saveToken(userDto.id, token)

        return { token, user: userDto }
    }

    async logout(token) {
        const tokenData = await tokenService.removeToken(token)
        return tokenData
    }
}

module.exports = new UserService()