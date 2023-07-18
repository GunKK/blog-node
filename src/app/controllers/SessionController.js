const User = require('../models/User');
class SessionController {
    create(req, res) {
        res.render("login");
    }

    async store(req, res) {
        // validate 
        let params = req.body
        // if (params.email.trim().length === 0) {
        //     res.render("login",{data: {"error": "Email is required"}});
        // }
    
        // if (params.password.trim().length === 0) {
        //     res.render("login",{data: {"error": "password is required"}});
        // }

        try {
            const checkEmail = await User.findByEmail(params.email)
            console.log(checkEmail[0])
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new SessionController();