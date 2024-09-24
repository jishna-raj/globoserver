const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next) =>{



try {


    const token = req.headers["authorization"].split(" ")[1]
    const jwtResponse = jwt.verify(token,"secretkey")
    console.log(jwtResponse);
    req.payload = jwtResponse.userId
    console.log(req.payload);
    
    next()
    
    
} catch (error) {
    res.status(406).json('Authorization failed due to' , error)
}

}


module.exports = jwtMiddleware