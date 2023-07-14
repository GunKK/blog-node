const bcrypt = require('bcrypt');
require('dotenv').config();

function hashPassword(password) {
    let saltRounds = process.env.SALT;
    let salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

function comparePassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword
}