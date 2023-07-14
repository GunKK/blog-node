const db = require('../../config/db/index');
module.exports = class User {
    constructor(name, email, password, role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    save() {
        return db.execute(
            'insert into users (name, email, password, role) values (?,?,?,?)',
            [this.name, this.email, this.password, this.role]  
        );
    }

    update() {
        return db.execute(
            'update users set name = ?, email = ?, password = ?, role = ? where id = ?'
            [this.name, this.email, this.password, this.role, this.id]  
        );
    }

    static findByEmail(email) {
        return db.execute('select * from users where email = ?', [email]);
    }

    static async emailExist(email) {
        return await db.execute('select count(*) from users where email = ?', [email]);
    }

    static fetchAll() {
        return db.execute('select * from users');
    }

    static findById(id) {
        return db.execute('select * from users where id = ?', [id]);
    }

    static deleteById(id) {
        return db.execute('delete from users where id = ?', [id]);
    }
}