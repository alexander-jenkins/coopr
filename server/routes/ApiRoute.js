const router = require("express").Router();
const { endpoints } = require("../controllers/ApiController");

router.get("/", endpoints);

module.exports = router;
