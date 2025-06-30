const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for 
    // the exact headers to be expected
    const token = req.headers.authorization;
    const realToken = token.split(" ");
    const jwtToken = realToken[1];
        
    const verified = jwt.verify(jwtToken,jwtSecret);
    if(verified.username){
        req.username = verified.username;
        next();
    }else{
    res.status(403).json({
        msg:"Username or Password invalid."
        })
    }
}

module.exports = userMiddleware;