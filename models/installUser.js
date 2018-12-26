const mongoose = require('mongoose');
mongoose.connect('mongodb://mcdonald:anhlocanh97@ds141674.mlab.com:41674/mcdonald_db', {
    useNewUrlParser: true
});

let UserBookingSchema = new mongoose.Schema({
    user_id: String,
    store_id: String,
    day: String,
    time: String,
    capacity: Number,
    phone: String,
    name: String
});
let userBooking = mongoose.model('UserBooking', UserBookingSchema);

//let timeArray = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '24:00'];

function saveUserBooking(user_id, store_id, day, time, capacity, phone, name) {
    userBooking({
        user_id: user_id,
        store_id: store_id,
        day: day,
        time: time,
        capacity: capacity,
        phone: phone,
        name: name
    }).save((err) => {
        if (err) throw err;
        console.log('user saved');
    });
}

//kiểm tra giờ đó đã đặt ở đâu chưa, trả mảng các đơn đã đặt giờ đó
async function findBookedTable(user_id, time) {
    //let indexTime = timeArray.indexOf(time);
    let info = await userBooking.find({
        user_id: user_id,
        time: time
    });
    return info;
}

//saveUserBooking('user00', 'store00', '12/26/2018', '07:00', 6, '0935235789', 'tuanloc');
//saveUserBooking('user01', 'store01', '12/26/2018', '07:00', 8, '0908219646', 'tuanloc');


//delete user => dùng khi cancel booking
function deleteUserBooking(user_id, time) {
    userBooking.deleteOne({
        user_id: user_id,
        time: time
    }, (err) => {
        if (err) throw err;
    });
}

deleteUserBooking('user00', '07:00');

module.exports = {
    saveUserBooking: saveUserBooking,
    findBookedTable: findBookedTable,
    deleteUserBooking: deleteUserBooking
}