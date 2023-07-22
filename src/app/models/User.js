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
        const date = new Date();
        return await db.execute(
            'insert into users (name, email, password, role, created_at, updated_at) values (?,?,?,?,?,?)',
            [name, email, password, role, date, date]
        );
    }

    static async update(name, password, id) {
        const date = new Date();
        return await db.execute(
            'update users set name = ?, password = ?, updated_at = ? where id = ?',
            [name, password, date ,id]  
        );
    }

    static async findByEmail(email) {
        return await db.execute('select * from users where email = ?', [email]);
    }

    static async emailExist(email) {
        return await db.execute('select count(*) as count from users where email = ?', [email]);
    }

    static async fetchAll() {
        return await db.execute('select * from users');
    }

    static async findById(id) {
        return await db.execute('select * from users where id = ?', [id]);
    }

    static async deleteById(id) {
        return await db.execute('delete from users where id = ?', [id]);
    }
}