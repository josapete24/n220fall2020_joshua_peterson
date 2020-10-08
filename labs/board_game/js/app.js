var gold_piece = document.getElementById("gold_piece1");
var x = $(gold_piece).position();

var board = document.getElementById("board");
board.addEventListener("click", getClickPosition, false);



gold_piece.onclick = function() {

    console.log(x);
}

function getClickPosition(e) {
    var position = $(e.currentTarget).position();
    var xPosition = e.clientX - position.x - (gold_piece.clientWidth / 2);
    var yPosition = e.clientY - position.y - (gold_piece.clientHeight / 2);


    console.log($(e.currentTarget).position());
    gold_piece.style.left = xPosition;
    gold_piece.style.top = yPosition;
}