const router = require("express").Router();

const { authUser } =require("../utils")

const {
  getNotification,
  createNotification,
  updateNotification,
  deleteNotification
} = require("../controllers/notification.controller");

router.get("/", authUser, getNotification);
router.post("/", authUser, createNotification);
router.put("/:id", authUser, updateNotification);
router.delete("/:id", authUser, deleteNotification);

module.exports = router;