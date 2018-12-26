const express = require('express');
const router = express.Router();
const sesssion = require('express-session');

router.use(sesssion({secret : 'anhlocanh97'}));

/* GET login page. */
router.get('/', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});


module.exports = router;