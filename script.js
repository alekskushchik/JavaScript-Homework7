"use strict";

/* Задание 1
Нужно вывести в консоль сколько минут осталось до конца текущего дня.
*/
var now = new Date();
var endDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0);

function minDiff(){
    return (endDay - now)/(1000 * 60);
};
var minutesDiff = minDiff();

console.log('До конца текущего дня осталось ' + Math.round(minutesDiff) + ' минут(ы).');


/* Задание 2
Нужно вывести в консоль сколько секунд прошло с начала текущего дня.
*/
// var startDay = +new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
var startDay = new Date();
startDay.setHours(0, 0, 0, 0);

var now = +new Date();

function secDiff(){
    return (now - startDay)/1000;
};
var secsDiff = secDiff();
console.log('От начала текущего дня прошло ' + Math.round(secsDiff) + ' секунд(ы).');

/* Задание 3
Выведите в консоль название для недели (например: Понедельник), которая была 25 января 2013
*/
var date = new Date(2013, 0, 25);
var options = {
    weekday: 'long'
  };
console.log('25 января 2013 года был день ' + date.toLocaleString("ru", options) + '.');


/* Задание 4
Сделайте скрипт, который будет просить пользователя ввести дату своего рождения в формате 1990-10-01 и в ответ будет выдавать сколько дней осталось до его дня рождения.
*/
var today = new Date();
var userBirthday = new Date(prompt('Введите свою дату рождения в формате ГГГГ-ММ-ДД.'));
var userNextBirthday = new Date(today.getFullYear(), userBirthday.getMonth(), userBirthday.getDate());
var daysToNextBirthday = Math.round((userNextBirthday - today)/(3600 * 1000 * 24));

if(daysToNextBirthday < 0){
    var calcDays = 365 + daysToNextBirthday;
    console.log('До Вашего Дня рождения осталось ' + calcDays + ' дней.');
} else if(daysToNextBirthday > 0){
    console.log('До Вашего Дня рождения осталось ' + daysToNextBirthday + ' дней.');
} else{
    console.log('Поздравляем! Сегодня Ваш День рождения!');
}

