const Comment = require("../models/Comment");

class CommentController {
    async store(req,res) {
        try {
            const { title, content, postId } = req.body;
            const userId = req.session.user.id;
            await Comment.create(title, content, userId, postId);
            return res.redirect(`/post/${postId}`);
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            }) 
        }
    }

    async update(req,res) {
        try {
            console.log(req.body)
            const {commentId, title, content } = req.body
            await Comment.update(title, content, commentId)
            return res.redirect('back')
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            }) 
        }
    }

    async destroy(req, res) {
        try {
            const commentId = req.body.commentId;
            await Comment.deleteById(commentId);
            return res.redirect('back');
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            }) 
        }
    }

    async showReplies(req,res) {
        try {   
            const parentId = req.params.id 
            console.log(req.body)      
            const [replies] = await Comment.getRepliesOfComment(parentId)
            res.status(200).json({
                replies: replies
            })
        } catch (error) {
            res.status(500).json({
                status: 'error',
                error: error.message
            })
        }
    }

    async storeReply(req,res) {
        try {
            const {parentId, title, content, postId } = req.body;
            const userId = req.session.user.id;
            await Comment.createReply(title, content, userId, postId, parentId);
            return res.redirect(`/post/${postId}`);
        } catch (error) {
            res.status(500).json({
                status: 'error',
                error: error.message
            })
        }
    }
}

module.exports = new CommentController();