function calc() {
    const x = document.getElementById('input-one').value;
    const y = document.getElementById('input-two').value;

    const sum = parseInt(x) + parseInt(y);

    console.log(sum);
    console.log("Rounded: " + Math.round(sum));

    if (x > y) {
        console.log("First Input is Bigger");
    } else if (y > x) {
        console.log("Second input is Bigger");
    } else {
        console.log("They are equal!");
    }
}