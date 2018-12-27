let realtimeBooking = (io) => {
    io.on('connection', function (socket) {
        console.log('a user connected');

        socket.on('db-onchange', (res)=>{
            let info = JSON.parse(res);
            io.emit('incoming-booking', JSON.stringify(info));


        });
    });
};

module.exports = {
    realtimeBooking: realtimeBooking
};