
class RegisterController {
    create(req, res) {
        res.render("signup");
    }

    store(req, res) {
        //
    }
}
module.exports = new RegisterController();