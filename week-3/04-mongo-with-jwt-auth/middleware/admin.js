const jwt = require("jsonwebtoken");
const {jwtsecret} = require("../config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for
    //  the exact headers to be expected
    const token = req.headers.authorization;
    const realToken = token.split(" ");
    const jwtToken = realToken[1];
    
    const verified = jwt.verify(jwtToken,jwtsecret);
    if(verified.username){
        next();
    }else{
        res.status(403).json({
            msg:"Username or Password invalid."
        })
    }
}

module.exports = adminMiddleware;