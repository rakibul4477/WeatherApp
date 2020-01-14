function getLocation() {
    if(navigator.geolocation)
    vavigator.geolocation.getCurrentPosition(showposition,showError);
}

function showposition(position) {
    console.log(position)
}
function showError(error) {
    console.log(error)
}
getLocation();