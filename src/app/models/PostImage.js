const db = require('../../config/db/index');
const { deleteById } = require('./User');
module.exports = class PostImage {
    constructor(post_id, path, primary) {
        this.post_id = post_id;
        this.path = path;
        this.primary = primary
    }

    save() {
        let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return db.execute(
            'insert into post_images (post_id, path, primary, created_at, updated_at) values (?,?,?,?)',
            [this.post_id, this.path, this.primary, date, date]  
        );
    }

    static findByPostId(post_id) {
        return db.execute('select * from post_images where post_id = ?', [post_id]);
    }
    
    static deleteById(id) {
        return db.execute('delete from post_images where id = ?',[id]);
    }
}