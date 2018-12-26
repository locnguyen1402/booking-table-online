const express = require('express');
const router = express.Router();

/* GET cart page. */
router.get('/', function(req, res) {
  res.render('cart');
});

module.exports = router;
