// Grabs the pieces and spaces //
let gold_piece = document.getElementsByClassName("gold_piece");
let purple_piece = document.getElementsByClassName("purple_piece");
let gold_space = document.getElementsByClassName("gold_space");
let purple_space = document.getElementsByClassName("purple_space");

// Turn and score for the players //
let turn = "gold";
let gold_score = 12;
let purple_score = 12;

// The outline of the chekcerboard //
const checker_board = [
    null, 0 , null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null, 
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null, 
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]

// Making sure that the document is grabbing everything //
window.onload = function() {
    console.log(gold_piece.length);
    console.log(purple_piece.length);
    console.log(purple_space.length);
    console.log(gold_space.length);
}

// Give each piece a function //
for (i = 0; i < gold_piece.length; i++) {
        gold_piece[i].addEventListener("click" , grabPiece());
}

for (i = 0; i < purple_piece.length; i++) {
        purple_piece[i].addEventListener("click" , grabPiece());
}

// Grabs the piece the player clicked on //
function grabPiece() {
    if (turn == "red") {
        playerPiece = gold_piece;
    } else {
        playerPiece = purple_piece;
    }
}