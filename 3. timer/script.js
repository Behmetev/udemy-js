const dataline = '2020-10-10';
function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
    minets = Math.floor((t / 1000 / 60 ) % 60),
    seconds = Math.floor((t / 1000 ) % 60);

    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minets' : minets,
        'seconds' : seconds
    };
}

function setClock(selector, endtime){

}