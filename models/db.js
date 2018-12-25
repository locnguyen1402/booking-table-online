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
let mcdonald = mongoose.model('mcdonald', StoreSchema);

//tìm cửa hàng người dùng chọn
async function getValidStore() {
    var store = await mcdonald.find({
        id: 'store00'
    });
    return store;
}
let day = new Date().toLocaleDateString();

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

function update(store) {
    mcdonald.findOne({id: store.id}, {today : 1}, (err, doc)=>{
        if(err) throw err;
           
    });
}
getValidStore().then((rel)=>{
    //console.log(rel);
    console.log('-----------------------');
    update(rel[0]);
});
/* getValidStore().then((result) => {
    console.log(result);
    console.log('-------------------');
    findValidTable(result[0], '00:00');
}); */


module.exports = mcdonald;