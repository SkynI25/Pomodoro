var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
var day = week[today.getDay()];
if(dd < 10) {
    dd = '0' + dd;
}
if(mm < 10) {
    mm = '0' + mm;
}
today = yyyy + '. ' + mm + '. ' + dd + '. ' + '(' + day + ')';
document.getElementById("date").innerHTML = today;

function toPomopage() {
    if(sessionStorage.getItem('timeSetting') !== null) {
        window.location.href='pomodoro.html';
        return;
    }
    alert("Please set the times in the Setting before you start Pomodoro.")
    return;
}