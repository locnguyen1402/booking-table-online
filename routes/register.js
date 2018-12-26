const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const User = require('../models/installAccount');

/* GET register page. */
router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', (req, res) => {
    console.log(req.body);
    // kiểm tra xem email đã tồn tại chưa
    // dữ liệu trả về là mảng
    User.find({
        email: req.body.email
    }, (err, doc) => {
        if (err) throw err;
        console.log(doc);
        // nếu email đã tồn tại thì thông báo cho người dùng
        if (doc.length === 1) {
            return res.status(200).json({
                message: "Exists"
            });
        } else {
            // nếu chưa có thì băm password là lưu vào DB
            const hashPassword = crypto.createHmac('sha256', req.body.password).digest('hex');
            console.log(hashPassword);
            new User({
                id: req.body.id,
                fullname: req.body.fullname,
                email: req.body.email,
                phone: req.body.phone,
                password: hashPassword,
            }).save((err)=>{
                if(err) throw err;
                console.log('saved');
                return res.status(200).json({
                    message: "Create"
                });
            });
        }
    });
});

module.exports = router;