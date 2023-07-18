const bcrypt = require('bcrypt');
require('dotenv').config();

function hashPassword(password) {
    try {
        const saltRounds = parseInt(process.env.SALT || 10);
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    } catch (error) {
        console.log(error);
    }
}

function comparePassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword
}