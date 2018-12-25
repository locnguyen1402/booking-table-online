const express = require('express');
const router = express.Router();
const mcdonaldDB = require('../models/db');

/* GET booking page. */
router.get('/', function (req, res) {
  res.render('booking');
});

router.post('/', function (req, res) {
  const store = getFormBooking(req.body);
  mcdonaldDB.findOne({
    id: store.id
  }, (err, doc) => {
    if(err) throw err;
    res.json(doc);
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