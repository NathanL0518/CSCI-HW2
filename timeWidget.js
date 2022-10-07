const endOfSam = new Date(2022, 12, 22)

function timeUntil( date ){
    let now = date.getTime();
    let end = endOfSam.getTime();
    let secBetween = end - now;
    let totalSec = secBetween / 1000;
    let days;
    let hours;
    let mins;
    let secs;
    if (totalSec > 86400){
        days = Math.floor(totalSec / 86400);
        totalSec = totalSec % 86400;
    }
    
    console.log()
}

