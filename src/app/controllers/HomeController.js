const Post = require("../models/Post");

class HomeController {
    async index(req,res) {
        try {
            const [posts] = await Post.fetchAll();
            // res.json({posts: posts});
            return res.render("home", { posts: posts });
        } catch (error) {
            res.json({
                status: 'error',
                error: error.message
            })
        }
    }

    contact(req, res) {
        res.render("contact");
    }
}
module.exports = new HomeController();
