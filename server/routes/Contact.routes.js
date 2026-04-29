const express = require("express");
const { submitContact } = require("../controllers/Contact.controller");
const { validateContact } = require("../middleware/Validate.middleware");

const router = express.Router();

router.post("/", validateContact, submitContact);

module.exports = router;