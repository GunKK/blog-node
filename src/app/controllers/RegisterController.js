const helper = require('../../util/helper');
const User = require('../models/User');
class RegisterController {
    create(req, res) {
        res.render('signup');
    }

    async store(req, res) {
        try {
            const params = req.body;
            // console.log(params);
            // validate
            if (params.name.trim().length === 0) {
                return res.render('signup', { data: { error: 'name is required' } });
            }
            if (params.password.trim().length === 0) {
                return res.render('signup', { data: { error: 'password is required' } });
            }

            if (params.password != params.re_password) {
                return res.render('signup', { data: { error: 'password is not match' } });
            }

            const [user] = await User.emailExist(params.email);
            const check = parseInt(user[0].count);
            if (check != 0) {
                return res.render('signup', { data: { error: 'email already exists' } });
            } else {
                const hash = helper.hashPassword(params.password);
                const newUser = await User.create(params.name, params.email, hash, 2);
                return res.render('login', { data: { success: 'signup successful', user: newUser } });
            }
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message,
            });
        }
    }
}
module.exports = new RegisterController();
