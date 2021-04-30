function clock() {
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minute');
    var seconds = document.getElementById('second');
    var ampm = document.getElementById('ampm');
    var hrs = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    var am = "AM";
    if (hrs > 12) {
        hrs = hrs - 12
        var am = "PM";
    }

    hrs = (hrs < 10) ? '0' + hrs : hrs
    min = (min < 10) ? '0' + min : min
    sec = (sec < 10) ? '0' + sec : sec

    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    ampm.innerHTML = am;


}
var interval = setInterval(clock, 1000);
