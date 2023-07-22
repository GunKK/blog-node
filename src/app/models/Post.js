const db = require('../../config/db/index');
module.exports = class Post {
    constructor(name, description, user_id) {
        this.name = name;
        this.description = description;
        this.user_id = user_id;
    }

    // save() {
    //     let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    //     return db.execute(
    //         'insert into posts (name, description, user_id, created_at, updated_at) values (?,?,?,?,?)',
    //         [this.name, this.description, this.user_id, date, date]  
    //     );
    // }

    static async create(name, description, user_id) {
        const date = new Date();
        return await db.execute(
            'insert into posts (name, description, user_id, created_at, updated_at) values (?,?,?,?,?)',
            [name, description, user_id, date, date]  
        );
    }

    static async update(name, description, id) {
        const date = new Date();
        return await db.execute(
            `update posts set name = ?, description = ?, updated_at = ? where id = ?`,
            [name, description, date, id]  
        );
    }

    static async fetchAll() {
        return await db.execute(
            'select posts.id, posts.name, description, posts.created_at, posts.updated_at, users.name as author from posts join users on user_id = users.id'
        );
    }

    static async findById(id) {
        return await db.execute(
            'select posts.id, posts.name, description, user_id ,posts.created_at, posts.updated_at, users.name as author from posts join users on user_id = users.id where posts.id = ?', 
            [id]
        );
    }

    static async deleteById(id) {
        return await db.execute('delete from posts where id = ?', [id]);
    }

    static async findByUserId(userId) {
        return await db.execute('select * from posts where user_id = ?', [userId]);
    }

    static async getUpdateLatestPost() {
        return await db.execute('SELECT * FROM posts ORDER BY updated_at DESC LIMIT 1');
    }
}