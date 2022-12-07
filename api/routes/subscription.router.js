const router = require("express").Router();

const {
  authUser
} = require('../utils') 

const {
  getSubscriptions,
  createSubscriptions,
  updateSubscriptions,
  deleteSubscriptions,
} = require("../controllers/subscription.controller");

router.get("/", authUser, getSubscriptions);
router.post("/", authUser, createSubscriptions);
router.put("/:id", authUser, updateSubscriptions);
router.delete("/:id", authUser, deleteSubscriptions);

module.exports = router;
