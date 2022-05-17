const jwt = require('jsonwebtoken');

const middlewares = {

    authenticate(req, res, next) {

        const { authentication } = req.headers
        
        try {

            if (!authentication) return res.status(400).json({ message: 'No token' })

            jwt.verify(authentication, process.env.SECRET);
        
            next()

        } catch (error) {
            return res.status(400).json({ message: 'Access Denied' })
            
        }
        
    }

}

module.exports = middlewares