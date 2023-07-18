const db = require('../../config/db/index');
module.exports = class User {
    constructor(name, email, password, role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    // async save() {
    //     return await db.execute(
    //         'insert into users (name, email, password, role) values (?,?,?,?)',
    //         [this.name, this.email, this.password, this.role]  
    //     );
    // }
    static async create(name, email, password, role) {
        return await db.execute(
            'insert into users (name, email, password, role) values (?,?,?,?)',
            [name, email, password, role]
        );
    }

    update() {
        return db.execute(
            'update users set name = ?, email = ?, password = ?, role = ? where id = ?'
            [this.name, this.email, this.password, this.role, this.id]  
        );
    }

    static async findByEmail(email) {
        return await db.execute('select * from users where email = ?', [email]);
    }

    static async emailExist(email) {
        return await db.execute('select count(*) as count from users where email = ?', [email]);
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