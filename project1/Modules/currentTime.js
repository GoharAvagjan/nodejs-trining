let currentDate = new Date();

function currentTime(){
    let hour = currentDate.getHours();
    let minut = currentDate.getMinutes();
    let secund = currentDate.getSeconds();
    let milisecond = currentDate.getMilliseconds();
    return hour +' ' +minut + ' ' + secund + ' ' + milisecond;
}

module.exports = currentTime;
