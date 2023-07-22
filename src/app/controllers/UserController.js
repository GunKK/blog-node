const helper = require('../../util/helper');
const User = require('../models/User');

class UserController {
    edit(req, res) {
        res.render('account');
    }

    async update(req, res) {
        try {
            const { name, password }  = req.body
            const hash = helper.hashPassword(password)
            const id = req.session.user.id
            await User.update(name, hash, id);
            return res.redirect('/account/edit');
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message,
            });
        }
    }
}

module.exports = new UserController();
