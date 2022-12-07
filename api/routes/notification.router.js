const router = require("express").Router();

const {
  getNotification,
  createNotification,
  updateNotification,
  deleteNotification
} = require("../controllers/notification.controller");

router.get("/", getNotification);
router.post("/", createNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);

module.exports = router;