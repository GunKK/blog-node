const db = require('../../config/db/index');
module.exports = class Post {
    constructor(name, description, user_id) {
        this.name = name;
        this.description = description;
        this.user_id = user_id;
    }

    save() {
        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return db.execute(
            'insert into posts (name, description, user_id, created_at, updated_at) values (?,?,?,?,?)',
            [this.name, this.description, this.user_id, date, date]  
        );
    }

    update() {
        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return db.execute(
            'update posts set name = ?, description = ?, updated_at = ? where id = ?'
            [this.name, this.description, date, this.id]  
        );
    }

    static fetchAll() {
        return db.execute('select * from posts');
    }

    static findById(id) {
        return db.execute('select * from posts where id = ?', [id]);
    }

    static deleteById(id) {
        return db.execute('delete from posts where id = ?', [id]);
    }

    static findByUserId(userId) {
        return db.execute('select * from posts where user_id = ?', [userId]);
    }
}