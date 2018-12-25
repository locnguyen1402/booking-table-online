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
let mcdonald_db = mongoose.model('mcdonald_db', StoreSchema);
let timeArray = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '24:00'];
//tìm cửa hàng người dùng chọn
async function getValidStore(store_id, day) {
    let store;
    if (day == 'today') {
        store = await mcdonald_db.find({
            id: store_id
        }, {
            id: 1,
            today: 1
        });
    }
    if (day == 'tomorrow') {
        store = await mcdonald_db.find({
            id: store_id
        }, {
            id: 1,
            tomorrow: 1
        });
    }
    if (day == 'thatday') {
        store = await mcdonald_db.find({
            id: store_id
        }, {
            id: 1,
            thatday: 1
        });
    }
    return store;
}

//lấy store vị trí 0
async function findValidTable(store, time) {
    //vị trí time trong chuỗi
    let index = store.time.indexOf(time);
    for (let i = 0; i < 2; i++) {
        if (store['today'][`tb${i+1}`].status[index] == false) {
            console.log(`tb${i+1}`);
        }
    }
}

//cho biết số bàn cần đặt
function findAmountOfTables(capacity) {
    let remainder = capacity / 4 - Math.floor(capacity / 4);
    let amoutOfTables = Math.floor(capacity / 4);
    if (capacity == 1) {
        amoutOfTables = 1
    } else {
        if (remainder >= 0.5) {
            amoutOfTables += 1;
        }
    }
    return amoutOfTables;
}

//kiểm tra ngày, return today or tomorrow or thatday or nomatch nếu ngày ko có
function checkDate(date) {
    let currentday = new Date();

    let nextday = new Date(currentday);
    nextday.setDate(nextday.getDate() + 1);

    let thatday = new Date(nextday);
    thatday.setDate(thatday.getDate() + 1);
    switch (date.trim()) {
        case currentday.toLocaleDateString("en-US"):
            {
                return 'today';
                break;
            }
        case nextday.toLocaleDateString("en-US"):
            {
                return 'tomorrow';
                break;
            }
        case thatday.toLocaleDateString("en-US"):
            {
                return 'thatday';
                break;
            }
        default:
            {
                return 'nomatch';
            }
    }
}

//kiểm tra có đủ bàn cần đặt ko, trả về mảng các bàn có thể đặt, chuyền vào index của time và store[0][`${dayKey}`]
function findFeasibleNumberOfTables(indexTime, store) {
    let tableArray = [];
    for (let i = 0; i < 10; i++) {
        if (store[`tb${i+1}`].status[indexTime] == false) {
            tableArray.push(`tb${i+1}`);
        }
    }
    return tableArray;
}

//trả về object để đặt bàn, chuyền vào mảng các bàn có thể đặt, số bàn cần đặt, ngày đặt (dayKey)
function objectUpdate(tempObj, tableArray, dayKey, statusArray, indexTime) {
    for (let i = 0; i < 4; i++) {
        statusArray[indexTime + i] = true;
    }

    tempObj[`${dayKey}.${tableArray}.status`] = statusArray;
}

//đặt bàn
async function booking(store_id, tempObj) {
    await mcdonald_db.findOneAndUpdate({
        id: store_id
    }, {
        $set: tempObj
    });
}

//truyền vào id store, ngày, giờ, số người, username => chỉ cần gọi 1 hàm này
function bookingProcess(store_id, day, time, capacity, res) {
    let amoutOfTables = findAmountOfTables(capacity);
    let indexTime = timeArray.indexOf(time);
    let dayKey = checkDate(day);

    if (dayKey == 'nomatch') {
        console.log('ngay khong phu hop');
        //res.json('something');
    } else {
        //ngày phù hợp để đặt, kiểm tra tiếp
        getValidStore(store_id, dayKey).then((store) => {
            if (store.length == 0) {
                //không có cửa hàng nên ko đặt được
                console.log('không có cửa hàng nên ko đặt được');
                //res.json('something');
            } else {
                //kiểm tra có đủ bàn đặt ko
                let tableArray = findFeasibleNumberOfTables(indexTime, store[0][`${dayKey}`]); // mảng bàn có thể đặt
                if (tableArray.length < amoutOfTables) {
                    //không đủ bàn
                    console.log('không đủ bàn');
                    //res.json('something');
                } else {
                    //đủ bàn => đặt bàn
                    let tempObj = {};

                    for (let i = 0; i < amoutOfTables; i++) {
                        objectUpdate(tempObj, tableArray[i], dayKey, store[0][`${dayKey}`][`${tableArray[i]}`].status, indexTime);
                    }
                    booking(store[0].id, tempObj).then(() => {
                        console.log('updated');
                        //res.json('something');
                    });
                }
            }
        });
    }
}

bookingProcess('store00', '12/26/2018', '00:00', 3, 'res');



/* getValidStore('store05', 'today').then((rel) => {
    console.log(rel);
    console.log('-----------------------');
});  */

//module.exports = mcdonald_db;
