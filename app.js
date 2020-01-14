let lalitude;
let longitude;
const notification = document.getElementsByClassName("notification")[0];


function getLocation() {
    if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(onSuccess,showError);
}

function onSuccess(position) {
    console.log(position)
}
function showError(error) {
    console.log('upppoooss',error)
    const p = document.createElement('p')
    p.innerHTML = error.message

    notification.style.display = "block";

    notification.appendChild(p);
}
getLocation();