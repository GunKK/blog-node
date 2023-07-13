
class SessionController {
    create(req, res) {
        res.render("login");
    }

    store(req, res) {
        //
    }
}
module.exports = new SessionController();