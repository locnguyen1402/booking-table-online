const mongoose = require('mongoose');
mongoose.connect('mongodb://mcdonald:anhlocanh97@ds141674.mlab.com:41674/mcdonald_db', {
    useNewUrlParser: true
});
let StoreSchema = new mongoose.Schema({
    id: String,
    time: Array,
    today: Object,
    tomorrow: Object,
    thatday: Object
});
//7h -> 23h
//time: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30']
//7h -> 22h
//time: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30']
let mcdonald = mongoose.model('mcdonald', StoreSchema);

mcdonald({
    id: "store02",
    time: ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30','07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'],
    today: {
        tb1: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb2: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb3: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb4: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb5: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb6: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb7: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb8: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb9: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb10: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        }
    },
    tomorrow: {
        tb1: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb2: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb3: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb4: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb5: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb6: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb7: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb8: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb9: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb10: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        }
    },
    thatday: {
        tb1: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb2: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb3: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb4: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb5: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb6: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb7: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb8: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb9: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        },
        tb10: {
            status : [false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false,false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false],
            user: new Array(46)
        }
    },
}).save((err) => {
    if (err) throw err;
    console.log('saved');
});


/* var StoreSchema = new mongoose.Schema({
    id: Number,
    time: ['08:00', '08:15', '08:30', '08:45', '09:00'],
    today: {
        tb1: {
            id: String,
            user: ['hoanganh', 'hoanganh',],
            status : [true, true, true, true, false]
        },
        tb2: {},
        tb3: {},
    },
    tomorrow: Object,
    thatday: Object
}); */


/* var booking = [
    {
        id : String,
        user : String,
        id_store : String,
        time: '',
    },{}
] */