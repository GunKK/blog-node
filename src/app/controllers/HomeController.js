class HomeController {
    index(req,res) {
        res.json({msg: 'say hi'})
    }

    test(req, res) {
        res.render("home");
    }
}
module.exports = new HomeController();
