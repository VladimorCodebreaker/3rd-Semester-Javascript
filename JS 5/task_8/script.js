function sum() {
    const x = document.getElementById('input-one').value;
    const y = document.getElementById('input-two').value;

    const e = document.getElementById('operator-list');
    var value = e.options[e.selectedIndex].text;

    if (value == "+") {
        const sum = parseInt(x) + parseInt(y);
        document.getElementById('result').innerHTML = sum;
    }
    else if (value == "-") {
        const sum = parseInt(x) - parseInt(y);
        document.getElementById('result').innerHTML = sum;
    }
    else if (value == "*") {
        const sum = parseInt(x) * parseInt(y);
        document.getElementById('result').innerHTML = sum;
    }
    else if (value == "/") {
        const sum = parseInt(x) / parseInt(y);
        document.getElementById('result').innerHTML = sum;
    }
    else {
        const sum = parseInt(x) % parseInt(y);
        document.getElementById('result').innerHTML = sum;
    }
}