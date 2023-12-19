
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = newDate();
    let hr =dateToday.getHours();
    let min = dateToday.getminutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    
    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
})