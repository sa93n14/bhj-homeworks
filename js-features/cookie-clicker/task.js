let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

function changeSizes() {
    clickerCounter.textContent++;
    if (cookie.width === 200) {
        cookie.width = 300;
    } else {
        cookie.width = 200;
    }
}

cookie.onclick = changeSizes;