function calc() {
    const a = document.getElementById('input-one').value;
    const b = document.getElementById('input-two').value;
    const c = document.getElementById('input-three').value;

    const arr = [a, b, c];

    const x = 10;

    console.log(x > a ? "X > A" : "X < A");
    console.log(x > b ? "X > B" : "X < B");
    console.log(x > c ? "X > C" : "X < C");
}