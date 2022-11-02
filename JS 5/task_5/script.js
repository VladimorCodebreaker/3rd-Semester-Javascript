var x = setInterval(function() {
    const date = new Date();

    document.getElementsByClassName('hours')[0].innerHTML = date.getHours();
    document.getElementsByClassName('minutes')[0].innerHTML = date.getMinutes();
    document.getElementsByClassName('seconds')[0].innerHTML = date.getSeconds();
}, 1000);

setTimeout(doDate(), 1000);