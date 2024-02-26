'use strict'

const date = document.querySelector('.date');
const time = document.querySelector('.time');
let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Срeда', 'Четверг', 'Пятница', 'Суббота']
function currentTime () {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1
    let day = today.getDate();
    month = (month < 10) ? '0' + month:month;
    day = (day < 10) ? '0' + day:day;
    date.innerHTML = year.toString() + '-' + month.toString() + '-' + day.toString() + " " + week[today.getDay()];

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours = (hours < 10) ? '0' + hours:hours;
    minutes = (minutes < 10) ? '0' + minutes:minutes;
    seconds = (seconds < 10) ? '0' + seconds:seconds;
    time.innerHTML = hours + ':' + minutes + ':' + seconds;
    setTimeout(currentTime, 1000);
}
currentTime();


