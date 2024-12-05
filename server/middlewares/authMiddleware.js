const jwt = require("jsonwebtoken");
const User = require("../models/user-model")
const authMiddleware = async (req, resp, next) => {

    const token = req.header("Authorization");
    if (!token) {
        return resp.status(401).json({ message:'Unauthorized HTTP, token not provided.'})
    }
    console.log(token, 'token authmiddleware')
    const jwtToken = token.replace("Bearer", "").trim(); //remove Bearer from Authorization
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log(isVerified, 'isVerified');
        const userData = await User.find({ email: isVerified.email }).select({password:0});
        console.log(userData, 'UserData authMiddleware');

        //sent to request for complete userData
        req.user = userData;
        req.token = jwtToken;
        req.userId = userData._id;

        next();
        
    } catch (error) {
        return resp.status(401).json({ message: 'Unauthorized. Invalid token' })
    }
}


module.exports = authMiddleware;