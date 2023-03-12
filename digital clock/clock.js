const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock( ) {
    let h = new Date() . getHours();
    let m = new Date() . getMinutes();
    let s = new Date() . getSeconds();
    let ampm =  "AM";

    if(h > 12){
        h = h-12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // hoursE1.innerHTML = h;
    // minutesE1.innerHTML = m;
    // secondsE1.innerHTML = s;
    // ampmE1.innerHTML= ampm;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText= ampm;

    setTimeout(()=>{
        updateClock();
    }, 1000);
}

updateClock();