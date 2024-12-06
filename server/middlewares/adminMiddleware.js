const adminMiddleware = async (req, resp, next) => {

    //check enter user is admin then used admin modules
    console.log('adminMiddleware calling')
    try {
        const adminRole = req.user.isAdmin;
        if (req.user && req.user.isAdmin === false) {
            return resp.status(403).json({message:'Admin privileges are required'});
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;

