const express = require("express");
const { submitContact } = require("../controllers/contacts.controller");
const { guardContactRequest } = require("../middleware/guardContact.middleware");
const { validateContact } = require("../middleware/validateContact.middleware");

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    endpoint: "/api/contact",
    method: "POST",
    description: "Submit the Balari contact form payload.",
  });
});

router.post("/", guardContactRequest, validateContact, submitContact);

module.exports = router;
