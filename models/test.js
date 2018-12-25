//kiểm tra ngày, return today or tomorrow or thatday or nomatch nếu ngày ko có
function checkDate(date){
    let currentday = new Date();

    let nextday = new Date(currentday);
    nextday.setDate(nextday.getDate()+1);

    let thatday = new Date(nextday);
    thatday.setDate(thatday.getDate()+1);
    switch(date.trim()){
        case currentday.toLocaleDateString("en-US"):{
            return 'today';
            break;
        }
        case nextday.toLocaleDateString("en-US"):{
            return 'tomorrow';
            break;
        }
        case thatday.toLocaleDateString("en-US"):{
            return 'thatday';
            break;
        }
        default : {
            return 'nomatch';
        }
    }
}
