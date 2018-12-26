const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const User = require('../models/installAccount');
const sesssion = require('express-session');

router.use(sesssion({secret : 'anhlocanh97'}));

/* GET login page. */
router.get('/', function (req, res) {
    res.render('login');
});

router.post('/', (req, res)=>{
    console.log(req.body);
    // băm password
    const hashPassword = crypto.createHmac('sha256', req.body.password).digest('hex');
    // tìm user theo email để đăng nhập
    User.find({email: req.body.email}, (err, docs)=>{
        if(err) throw err;
        // kiểm tra xem password có đúng ko
        if(hashPassword == docs[0].password){
            req.session.email = docs[0].email;
            req.session.name = docs[0].fullname;     
            res.status(200).json({
                message: "correct"
            });
        } else res.status(200).json({
            message: "incorrect"
        });
        
    });
});

module.exports = router;