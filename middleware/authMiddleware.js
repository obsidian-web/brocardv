const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS"){                                 //if OPTIONS method -> skip, we interested just in POST,GET,PUT,DELETE methods
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]                   //get token from token-header: Type, token (ex: Bearer a34hjhjgcj32)
        if (!token){                                                                   // if token doesn't exist -> throw 401 error
            return res.status(401).json({message: "Пользователь не авторизован"})
        }
        req.user= jwt.verify(token, process.env.JWT_KEY)                       //if token exist -> decode it and verify with secret ke
        next()                                                                        //call next middleware in chain
    } catch (e){
        res.status(401).json({message: 'Пользователь не авторизован'})
    }
}