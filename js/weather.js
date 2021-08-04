const apiKey = "e6a91af91f9fb32ddacff8545dffd642"
function onGeoSuccess(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    const weather = document.querySelector("#weather")
    const cityInfo = weather.querySelector("#city-info")
    const weatInfo = weather.querySelector("#weat-info")

    fetch(url).then(response => response.json()).then(data => {
        weather.classList.remove("hidden")

        cityInfo.innerText = data.name
        weatInfo.innerText = data.weather[0].main
    })
}

function onGeoFail(position) {
    console.log(position)

    alert("WHY!!!!!!!")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)