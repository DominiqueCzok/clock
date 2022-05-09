const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const hourEl = document.querySelector(".hour");

const clockEl = document.querySelector(".digital")


setInterval(() => {
    const date = new Date;
    const secDeg = date.getSeconds()/60 * 360 -90;
    const minDeg = (secEl + date.getMinutes())/60 * 360 -90;
    const hourDeg = date.getHours()/12 * 360 -90;
    secEl.style.transform = `rotate(${secDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;    
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    
    clockEl.innerHTML = `${hour} : ${min} : ${sec}`;
}, 1000)

setClock()