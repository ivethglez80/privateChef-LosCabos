const express = require ("express");
const router = express.Router();

const { sendEmail } = require ("../controllers/contactFormController/sendEmailController");

router.post("/form", sendEmail);

/* los llamados post a http://localhost:3001/contactus/form */

module.exports = router;