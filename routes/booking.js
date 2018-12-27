const express = require('express');
const router = express.Router();
const mcdonaldDB = require('../models/db');
const User = require('../models/installUser');
/* GET booking page. */
router.get('/', function (req, res) {
  if (req.session.email) {
    res.render('booking', {
      name: req.session.name,
      email: req.session.email
    });
  } else {
    res.render('booking', {
      name: '',
      email: ''
    });
  }
});

router.post('/', function (req, res) {
  const store = getFormBooking(req.body);
  mcdonaldDB.bookingProcess(store.id, store.date, store.time, store.capacity, store.email, store.phone, store.fullname, res);
  // đã xong hết các thứ râu ria của form khi ấn thì sẽ query dữ liệu của user
  // khi ấn nút booking thì sẽ add vào 2 db 
  // HIỆN TẠI THÌ CHỈ MỚI ADD 1 DB
});

router.post('/queryUser', (req, res) => {
  console.log(req.body);
  console.log(req.session.email);
  User.findOne({
    email: req.session.email
  }, (err, doc) => {
    if (err) throw err;
    res.status(200).json({
      fullname: doc.fullname,
      email: doc.email,
      phone: doc.phone
    });
  });
});

let getFormBooking = (reqBody) => {
  return {
    id: reqBody.id,
    date: reqBody.date,
    time: reqBody.time,
    capacity: reqBody.capacity,
    fullname: reqBody.fullname,
    email: reqBody.email,
    phone: reqBody.phone
  }
};

module.exports = router;