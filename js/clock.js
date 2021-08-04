const clock = document.querySelector("#clock")

function getTime() {
    const date = new Date()
    const hh = date.getHours().toString().padStart(2, "0")
    const mm = date.getMinutes().toString().padStart(2, "0")
    const ss = date.getSeconds().toString().padStart(2, "0")

    clock.innerText = `${hh}:${mm}:${ss}`
}

getTime()
setInterval(getTime, 333)
