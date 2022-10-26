var cells = document.getElementsByTagName('td'),
    colors = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];

for(var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '#' + colors[Math.floor(Math.random() * colors.length)];
}