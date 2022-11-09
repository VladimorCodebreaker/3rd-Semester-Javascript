let arrOfCityNames = [];

function AddNewCity() {
    let newCityName = document.getElementById('input-1').value;

    arrOfCityNames.push(newCityName);

    ReloadCities();
}

function ReloadCities() {
    let citiesSelect = document.getElementById('citiesSelect');

    for (var i = 0; i < arrOfCityNames.length; i++) {
        var option = document.createElement("option");

        option.value = arrOfCityNames[i];
        option.text = arrOfCityNames[i];

        citiesSelect.appendChild(option);
    }
}