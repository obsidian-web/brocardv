const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJWT = (id, number, role) => jwt.sign(
    {id, number, role}, process.env.JWT_KEY, {expiresIn: '24h'}
)

class UserController {
    async registration(req, res, next) {
        const {number, password} = req.body
        if (!number || !password) {
            return next(ApiError.badRequest('Некорректные данные! :( '))
        }

        const candidate = await User.findOne({where: {number}})

        if (candidate) {
            return next(ApiError.badRequest('Этот номер телефона уже зарегестрирован! :( '))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({number, role: 'User', password: hashPassword})
        const token = generateJWT(user.id, user.number, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {number, password} = req.body
        const user = await User.findOne({where: {number}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден!'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.internal('Указан неверный пароль!'))
        }
        const token = generateJWT(user.id, user.number, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.number, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()