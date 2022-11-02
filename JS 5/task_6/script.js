function calcKnots(km_per_hour) {
    document.getElementsByClassName('result')[0].innerHTML = (km_per_hour / 1.852).toFixed(2);
}

calcKnots(69);