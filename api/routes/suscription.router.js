const router = require("express").Router();

const {
  getsubScriptions,
  createSubscriptions,
  updateSubscriptions,
  deleteSubscriptions,
} = require("../controllers/subscription.controller");

router.get("/", getsubScriptions);
router.post("/", createSubscriptions);
router.put("/:id", updateSubscriptions);
router.delete("/:id", deleteSubscriptions);

module.exports = router;
