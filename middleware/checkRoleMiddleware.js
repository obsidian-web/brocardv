const jwt = require('jsonwebtoken')             //import JWT

module.exports = role => {                  //request role
    return function (req,res,next){
        if (req.method === "OPTIONS"){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]                   //decode JWT
            if (!token){
                return res.status(401).json({message: "Пользователь не авторизован!"})
            }
            const decoded = jwt.verify(token, process.env.JWT_KEY)
            if (decoded.role !== role){        //check Role if different -> throw 403 error
                return res.status(403).json({message: "Нет доступа!"})
            }
            req.user = decoded
            next()
        } catch (e){
            res.status(401).json({message: 'Пользователь не авторизован!'})
        }
    }
}