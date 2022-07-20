const express = require('express');
const router = express.Router();
const urlcontroller = require("../controllers/urlController")

//api's
router.post('/url/shorten', urlcontroller.generateShortUrl)
router.get('/:urlCode', urlcontroller.getUrlCode)


//export router
module.exports = router;