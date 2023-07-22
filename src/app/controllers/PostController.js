const Post = require("../models/Post");
const Comment = require("../models/Comment");

class PostController {
    create(req, res) {
        return res.render('posts/new');
    }

    async store(req,res) {
        try {
            const { name, description } = req.body;
            const userId = req.session.user.id;
            await Post.create(name, description, userId);
            const [result] = await Post.getUpdateLatestPost()
            const postId = result[0].id
            return res.redirect(`/#post-${postId}`)
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            }) 
        }
    }

    async show(req,res) {
        try {
            const [result] = await Post.findById(req.params.id);
            if (result.length === 0) {
                return res.json({
                    message: `Not Found Post with id ${req.params.id}`
                })
            } else {
                const post = result[0];
                const [comments] = await Comment.findByPostId(req.params.id);
                return res.render('posts/show', {
                    post: post, 
                    comments: comments
                });
            }
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            })
        }
    }

    async edit(req,res) {
        try {
            const [result] = await Post.findById(req.params.id);
            if (result.length === 0) {
                return res.json({
                    message: `Not Found Post with id ${req.params.id}`
                })
            } else {
                const post = result[0];
                return res.render('posts/edit', {post: post});
            }
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            })
        }
    }

    async update(req,res) {
        try {
            const id = req.params.id
            const { name, description } = req.body
            await Post.update(name, description, id)
            const [result] = await Post.getUpdateLatestPost()
            const postId = result[0].id
            return res.redirect(`/post/${postId}`)
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            }) 
        }
    }

    async destroy(req,res) {
        try {
            const postId = req.body.id
            await Post.deleteById(postId)
            return res.redirect('/')
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            }) 
        }
    }

}
module.exports = new PostController();
