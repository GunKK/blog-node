const helper = require('../../util/helper');
const User = require('../models/User');
class SessionController {
    create(req, res) {
        res.render('login');
    }

    async store(req, res) {
        try {
            const params = req.body;
            if (params.email.trim().length === 0) {
                return res.render('login', { data: { error: 'Email is required' } });
            }

            if (params.password.trim().length === 0) {
                return res.render('login', { data: { error: 'password is required' } });
            }

            const [countUser] = await User.emailExist(params.email);
            const check = parseInt(countUser[0].count);
            if (check == 0) {
                return res.render('login', { data: { error: `not found acount with ${params.email}` } });
            } else {
                const [user] = await User.findByEmail(params.email);
                const authen = helper.comparePassword(params.password, user[0].password);
                if (authen === true) {
                    req.session.user = { id: user[0].id, name: user[0].name, role: user[0].role };
                    return res.redirect('/');
                } else {
                    return res.render('login', { data: { error: 'Incorrect email or password' } });
                }
            }
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message,
            });
        }
    }

    async logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            }
            // res.redirect('/login');
            // res.json({ data: { success: 'Logout successfully' } });
            res.redirect('/login')
        });
    }
}
module.exports = new SessionController();
