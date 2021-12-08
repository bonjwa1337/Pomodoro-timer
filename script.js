const minutes = document.querySelector('.minutes').querySelector('input'),
    seconds = document.querySelector('.seconds').querySelector('input'),
    ring = document.querySelector('.ring'),
    startBtn = document.querySelector('.start'),
    settingsBtn = document.querySelector('.settings');

function secondTick() {
    seconds.value = editNumber(+seconds.value - 1);
    if (seconds.value < 0) {
        minutes.value = editNumber(+minutes.value - 1);
        seconds.value = 59;
    }
    if (minutes.value == 0 && seconds.value == 0) {
        clearInterval(tick);
        ring.style.stroke = 'red';
    }
}

function editNumber(num) {
    return num < 10 ? `0${num}` : num;
}



startBtn.addEventListener('click', tick)
settingsBtn.addEventListener('click', () => {
    if (seconds.disabled) {
        seconds.disabled = false;
        minutes.disabled = false;
    } else {
        seconds.disabled = true;
        minutes.disabled = true;
    }
})

function tick() {
    startBtn.removeEventListener('click', tick);
    seconds.disabled = true;
    minutes.disabled = true;
    tick = setInterval(secondTick, 1000);
}

seconds.addEventListener('input', () => {
    if(seconds.value < 0) {
        seconds.value = editNumber(0);
    }
})

minutes.addEventListener('input', () => {
    if(minutes.value < 0) {
        minutes.value = editNumber(0);
    }
})