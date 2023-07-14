const helper = require('../../util/helper');
const User = require('../models/User')
class RegisterController {
    create(req, res) {
        res.render("signup");
    }

    store(req, res) {
        let params = req.body 
            // validate 
            if (params.email.trim().length === 0) {
                res.render("signup",{data: {"error": "Email is required"}});
            }
        
            if (params.name.trim().length === 0) {
                res.render("signup",{data: {"error": "name is required"}});
            }
        
            if (params.password.trim().length === 0) {
                res.render("signup",{data: {"error": "password is required"}});
            }
        
            if (params.password != params.re_password) {
                res.render("signup",{data: {"error": "password is not match"}});
            }
        // insert user into db
        const hash = helper.hashPassword(params.password);
        const user = new User(params.name, params.email, hash, 2);
        user
            .save()
            .then(() => {})
            .catch((err) => console.log(err));
        res.redirect('/login');
    }
}
module.exports = new RegisterController();