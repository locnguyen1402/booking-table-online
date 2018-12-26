if (store.length == 0) {
    //không có cửa hàng nên ko đặt được
    console.log('không có cửa hàng nên ko đặt được');
} else {
    //kiểm tra có đủ bàn đặt ko
    let tableArray = findFeasibleNumberOfTables(indexTime, store[0][`${dayKey}`]); // mảng bàn có thể đặt
    if (tableArray.length < amoutOfTables) {
        //không đủ bàn
        console.log('không đủ bàn');
    } else {
        //đủ bàn
        //đặt bàn
        let tempObj = {};

        for(let i = 0; i < amoutOfTables; i++){
            objectUpdate(tempObj, tableArray[i], dayKey, store[0][`${dayKey}`][`${tableArray[i]}`].status, indexTime);
        }

        console.log(tempObj);
        
        mcdonald_db.findOneAndUpdate({
            id: store[0].id
        }, {
            $set: tempObj
        }, (err, doc) => {
            if (err) throw err;
            console.log('updated');
        });
    }
}