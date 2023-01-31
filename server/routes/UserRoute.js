const router = require("express").Router();
const { register, login } = require("../controllers/UserController");

// register a new user
router.post("/register", register);

// login an existing user
router.post("/login", login);

// update a user's details
// todo implement logic to change a user's details

module.exports = router;
