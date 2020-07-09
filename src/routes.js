const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();
const authMiddleware = require("./app/middlewares/auth");
const guestMiddleware = require("./app/middlewares/guest");

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");
const DashboardController = require("./app/controllers/DashboardController");
const FileController = require("./app/controllers/FileController");
const AppointmentController = require("./app/controllers/AppointmentController");
const AvaliableController = require("./app/controllers/AvaliableController");
const ScheduleController = require("./app/controllers/ScheduleController");

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash("success");
  res.locals.flashError = req.flash("error");
  return next();
});

routes.get("/files/:file", FileController.show);

routes.get("/", guestMiddleware, SessionController.create);

// Enable on all routes that start with /app
routes.use("/app", authMiddleware);
routes.get("/app/logout", SessionController.destroy);

routes.post("/signin", SessionController.store);
routes.get("/signup", UserController.create);
routes.post("/signup", upload.single("avatar"), UserController.store);

routes.get("/app/dashboard", DashboardController.index);

routes.get("/app/appointments/new/:provider", AppointmentController.create);
routes.get("/app/appointments/new/:provider", AppointmentController.store);

routes.get("/app/avaliable/:provider", AvaliableController.index);

routes.get("/app/schedule", ScheduleController.index);

module.exports = routes;
