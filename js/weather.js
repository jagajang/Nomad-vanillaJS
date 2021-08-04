function onGeoSuccess(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
}

function onGeoFail(position) {
    console.log(position)

    alert("WHY!!!!!!!")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)