const clock = document.querySelector("#clock")

function getTime() {
    const hh = new Date().getHours();
    const mm = new Date().getMinutes();
    const ss = new Date().getSeconds();

    clock.innerText = `${hh}:${mm}:${ss}`
}

getTime()
setInterval(getTime, 500)