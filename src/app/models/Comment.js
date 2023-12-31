const db = require('../../config/db/index');
module.exports = class Comment {
    constructor(title, content, userId, postId) {
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.postId = postId;
    }

    static async create(title, content, userId, postId) {
        const date = new Date();
        return await db.execute(
            'insert into comments (title, content, user_id, post_id, created_at, updated_at) values (?,?,?,?,?,?)',
            [title, content, userId, postId, date, date]
        );
    }

    static async update(title, content, id) {
        const date = new Date();
        return db.execute(
            'update comments set title = ?, content = ?, updated_at = ? where id = ?',
            [title, content, date, id]
        );
    }

    static async findByPostId(postId) {
        return await db.execute(
            `select comments.id as id, title, content, comments.updated_at, user_id, users.name as user_name from comments 
            join users
            on users.id = user_id
            where post_id = ?
            and parent_id IS NULL
            order by updated_at DESC`, 
            [postId]
        );
    }

    static async getRepliesOfComment(parentId) {
        return await db.execute(
            `select comments.id as id, title, content, post_id, comments.updated_at, user_id, users.name as user_name from comments 
            join users
            on users.id = user_id
            where parent_id = ?
            order by updated_at DESC`,
            [parentId]
        );
    }

    static async createReply(title, content, userId, postId, parentId) {
        const date = new Date();
        return await db.execute(
            'insert into comments (title, content, user_id, post_id, parent_id, created_at, updated_at) values (?,?,?,?,?,?,?)',
            [title, content, userId, postId, parentId, date, date]
        );
    }

    static deleteById(id) {
        return db.execute('delete from comments where id = ?', [id]);
    }
}