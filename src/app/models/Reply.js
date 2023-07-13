const db = require('../../config/db/index');
module.exports = class Reply {
    constructor(comment_id, reply_id) {
        this.comment_id = comment_id;
        this.reply_id = reply_id;
    }

    save() {
        return db.execute(
            'insert into replies (comment_id, reply_id) values(?,?)'
            [this.comment_id, this.reply_id]
        );
    }

    static findByCommentId(comment_id) {
        return db.execute(
            'select * from comments join replies where id = reply_id and where comment_id = ?' 
            [comment_id]
        );
    }
}