const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();
const authMiddleware = require("./app/middlewares/auth");
const guestMiddleware = require("./app/middlewares/guest");

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");

// Enable on all routes that start with /app
routes.use("/app", authMiddleware);

routes.get("/", SessionController.create);
routes.post("/signin", SessionController.store);
routes.get("/signup", UserController.create);
routes.post("/signup", upload.single("avatar"), UserController.store);
routes.get("/app/dashboard", (req, res) => {
  console.log(req.session.user);
  res.render("dashboard");
});

module.exports = routes;
