const routes = require("../../routes");
const { User } = require("../models");

class UserController {
  create(req, res) {
    return res.render("auth/signup");
  }

  async store(req, res) {
    if (!req.file) {
      req.flash("error", "Necessário adicionar uma imagem");
      return res.redirect("/signup");
    }

    const { filename } = req.file;

    await User.create({
      ...req.body,
      avatar: filename,
    });
    return res.redirect("/");
  }
}

module.exports = new UserController();
