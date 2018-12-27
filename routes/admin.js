const express = require('express');
const nodeExcel = require('excel-export');
const router = express.Router();
const UserBookingModel = require('../models/installUserBooking');
/* GET admin page. */
router.get('/', function (req, res) {
    res.render('admin');
});

router.post('/load', (req, res) => {
    console.log(req.body);
    UserBookingModel.userBooking.find({}, (err, docs) => {
        if (err) throw err;
        res.status(200).json(docs);
    });
});

router.get('/export-excel', (req, res) => {
    UserBookingModel.userBooking.find({}, (err, docs) => {
        if (err) throw err;
        let conf = {};
        conf.cols = [{
                caption: 'Name',
                type: 'string'
            },
            {
                caption: 'Email',
                type: 'string'
            },
            {
                caption: 'Phone',
                type: 'string'
            },
            {
                caption: 'Store',
                type: 'string'
            },
            {
                caption: 'Day',
                type: 'string'
            },
            {
                caption: 'Table',
                type: 'string'
            },
            {
                caption: 'Time',
                type: 'string'
            },
            {
                caption: 'Capacity',
                type: 'number'
            }

        ];
        let rows = [];
        for (let i = 0; i < docs.length; i++) {
            let data = [docs[i].name, docs[i].email, docs[i].phone, docs[i].store_id, docs[i].day, docs[i].table.toString(), docs[i].time, docs[i].capacity];
            rows.push(data);
        }
        conf.rows = rows;
        let result = nodeExcel.execute(conf);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats');
        res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
        res.end(result, 'binary');
    });
});

module.exports = router;