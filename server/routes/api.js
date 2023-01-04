const router = require('express').Router();
const { endpoints } = require('../controllers/apiController');

router.get('/', endpoints);

module.exports = router;
