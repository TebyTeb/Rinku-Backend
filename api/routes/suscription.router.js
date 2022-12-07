const router = require("express").Router();

const {
  getSuscriptions,
  createSuscriptions,
  updateSuscriptions,
  deleteSuscriptions,
} = require("../controllers/suscription.controller");

router.get("/", getSuscriptions);
router.post("/", createSuscriptions);
router.put("/:id", updateSuscriptions);
router.delete("/:id", deleteSuscriptions);

module.exports = router;
