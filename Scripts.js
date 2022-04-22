function displayTime() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var amPm = "AM";

    if (hour > 12) {
        hour = hour - 12;
        amPm = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    } if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    document.getElementById("clockHour").innerHTML = hour + ":" + minute + ":" + second + " " + amPm;

}

function displayDate() {
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("clockDate").innerHTML = day[d.getDay()] + " " + month[d.getMonth()] + " " + date + ", " + year;
}

setInterval(function () { displayTime(), 1000 });

displayTime();
displayDate();