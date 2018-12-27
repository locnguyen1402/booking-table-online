const express = require('express');
const router = express.Router();
const session = require('express-session');
const userBooking = require('../models/installUserBooking');
const mcdonaldDB = require('../models/db');
router.use(session({
    secret: 'anhlocanh97'
}));

/* GET cart page. */
router.get('/', function (req, res) {
    if (req.session.email) {
        userBooking.findBookedTableByEmail(req.session.email).then((result) => {
            console.log(result);
            if (result.length == 0) {
                res.render('bookingcart', {
                    email: req.session.email,
                    name: req.session.name,
                    info: result //result = []
                });
            } else {
                res.render('bookingcart', {
                    email: req.session.email,
                    name: req.session.name,
                    info: result // result [{}...]
                });
            }
        });
    } else {
        console.log('chua login');
        res.render('bookingcart', {
            email: '',
            name: '',
            info: []
        });
    }
});

router.post('/delbooking', (req, res) => {
    let info = getDeleteForm(req.body);
    mcdonaldDB.cancelProcess(info.id, info.date, info.time, info.email, res);
});

let getDeleteForm = (reqBody) => {
    return {
        id: reqBody.id,
        date: reqBody.date,
        time: reqBody.time,
        email: reqBody.email
    }
};


module.exports = router;