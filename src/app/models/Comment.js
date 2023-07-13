const dc = require('../../config/db/index');
const { deleteById } = require('./User');
module.exports = class Comment {
    constructor(title, content, user_id, post_id) {
        this.title = title;
        this.content = content;
        this.user_id = user_id;
        this.post_id = post_id;
    }

    save() {
        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return db.execute(
            'insert into comments (title, content, user_id, post_id, created_at, updated_at) values (?,?,?,?,?,?,?)',
            [this.title, this.content, this.user_id, this.post_id, date, date]
        );
    }

    update() {
        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return db.execute(
            'update comments set title = ?, content = ?, updated_at = ? where id = ?'
            [this.title, this.content, date, this.id] 
        );
    }

    static fetchAll() {
        return db.execute('select * from comments');
    }

    static findById(id) {
        return db.execute('select * from comments where id = ?', [id]);
    }

    static findByPostId(postId) {
        return db.execute('select * from comments where post_id = ?', [post_id]);
    }

    static deleteById(id) {
        return db.execute('delete from comments where id = ?', [id]);
    }
}