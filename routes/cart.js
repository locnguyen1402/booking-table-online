const express = require('express');
const router = express.Router();

/* GET cart page. */
router.get('/', function(req, res) {
  if (req.session.email) {
    res.render('cart', {
      name: req.session.name,
      email: req.session.email
    });
  } else {
    res.render('cart', {
      name: '',
      email: ''
    });
  }
});

module.exports = router;
