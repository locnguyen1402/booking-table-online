const express = require('express');
const router = express.Router();
const sesssion = require('express-session');

router.use(sesssion({secret : 'anhlocanh97'}));

/* GET home page. */
router.get('/', function (req, res) {
  if (req.session.email) {
    res.render('homepage', {
      name: req.session.name,
      email: req.session.email
    });
  } else {
    res.render('homepage', {
      name: '',
      email: ''
    });
  }

});

module.exports = router;