const router = require("express").Router();

// register a new user
router.post("/register");

// login an existing user
router.post("/login");

// update a user's details
// todo implement logic to change a user's details

module.exports = router;
