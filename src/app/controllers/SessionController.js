const User = require('../models/User');
class SessionController {
    create(req, res) {
        res.render("login");
    }

    store(req, res) {
        // validate 
        let params = req.body
        if (params.email.trim().length === 0) {
            res.render("login",{data: {"error": "Email is required"}});
        }
    
        if (params.password.trim().length === 0) {
            res.render("login",{data: {"error": "password is required"}});
        }

        let checkEmail = User.findByEmail(params.email)
        
    }
}
module.exports = new SessionController();