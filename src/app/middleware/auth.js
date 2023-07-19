const isLogin = (req,res,next) => {
    if (req.session && res.session.userId) {
        
    }
}

const checkAdmin = (req, res, next) => {
    next();
}

module.exports = {
    isLogin: isLogin,
    checkAdmin: checkAdmin
}