const express = require("express");
const router = express.Router();

const emailCtrl = require("../controllers/emails");

router.get("/", emailCtrl.getAll);
router.post("/", emailCtrl.newEmail);
router.delete("/:id", emailCtrl.deleteEmail);

module.exports = router;
