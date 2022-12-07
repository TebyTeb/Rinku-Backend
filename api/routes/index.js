const router = require("express").Router();

const usersRouter = require("./user.router.js");
const authRouter = require("./auth.router.js");
const catalogRouter = require("./catalog.router.js");
const subscriptionRouter = require("./subscription.router.js");
const notificationRouter = require("./notification.router.js");

router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/catalog", catalogRouter);
router.use("/subscriptions", subscriptionRouter);
router.use("/notification", notificationRouter)

module.exports = router;
