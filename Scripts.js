var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();


var date = d.getDate();
var year = d.getFullYear();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


document.getElementById("clockHour").innerHTML = hour + ":" + minute + ":" + second + " " + "PM";
document.getElementById("clockDate").innerHTML = day[d.getDay()] + " " + month[d.getMonth()] + " " + date + ", " + year;