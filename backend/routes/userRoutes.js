const express = require("express");
const { registerUser } = require("../controllers/usercontroller");

const router = express.Router()

router.route('/').post(registerUser)
// router.route('/login').post(authRoute)

module.exports = router;
