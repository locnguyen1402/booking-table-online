const express = require('express');
const router = express.Router();

/* GET admin page. */
router.get('/', function (req, res) {
    res.render('admin');
});


module.exports = router;