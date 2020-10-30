// Grab the pieces and the board //

// The pieces //
let piece1 = document.getElementById("piece1");
let piece2 = document.getElementById("piece2");
let piece3 = document.getElementById("piece3");
let piece4 = document.getElementById("piece4");
let piece5 = document.getElementById("piece5");
let piece6 = document.getElementById("piece6");
let piece7 = document.getElementById("piece7");
let piece8 = document.getElementById("piece8");
let piece9 = document.getElementById("piece9");
let piece10 = document.getElementById("piece10");
let piece11 = document.getElementById("piece11");
let piece12 = document.getElementById("piece12");
let piece13 = document.getElementById("piece13");
let piece14 = document.getElementById("piece14");
let piece15 = document.getElementById("piece15");
let piece16 = document.getElementById("piece16");
let piece17 = document.getElementById("piece17");
let piece18 = document.getElementById("piece18");
let piece19 = document.getElementById("piece19");
let piece20 = document.getElementById("piece20");
let piece21 = document.getElementById("piece21");
let piece22 = document.getElementById("piece22");
let piece23 = document.getElementById("piece23");
let piece24 = document.getElementById("piece24");
let piece25 = document.getElementById("piece25");
let piece26 = document.getElementById("piece26");
let piece27 = document.getElementById("piece27");
let piece28 = document.getElementById("piece28");
let piece29 = document.getElementById("piece29");
let piece30 = document.getElementById("piece30");
let piece31 = document.getElementById("piece31");
let piece32 = document.getElementById("piece32");
let piece33 = document.getElementById("piece33");
let piece34 = document.getElementById("piece34");
let piece35 = document.getElementById("piece35");
let piece36 = document.getElementById("piece36");
let piece37 = document.getElementById("piece37");
let piece38 = document.getElementById("piece38");
let piece39 = document.getElementById("piece39");
let piece40 = document.getElementById("piece40");
let piece41 = document.getElementById("piece41");
let piece42 = document.getElementById("piece42");

// The board //
let board = document.getElementById("board");

// Variable for the mouse x position //
let mouseX = 0;

// Add an eventListener to board //
board.addEventListener("mousemove" , setMouseCord);


// Setting the x position of the piece equal to the x position of the mouse //
function setMouseCord(event){
    
    if (event.clientX < 200) {
        mouseX = 50;
    } else if (event.clientX > 200 && event.clientX < 300) {
        mouseX = 150;
    } else if (event.clientX > 300 && event.clientX < 400) {
        mouseX = 250;
    } else if (event.clientX > 400 && event.clientX < 500) {
        mouseX = 350;
    }else if (event.clientX > 500 && event.clientX < 600) {
        mouseX = 450;
    }else if (event.clientX > 600 && event.clientX < 700) {
        mouseX = 550;
    }else if (event.clientX > 700 && event.clientX < 800) {
        mouseX = 650;
    }
    //mouseX = event.clientX - 110;

    console.log(mouseX)

    if (piece1.style.cy <= 25) {
        piece1.style.cx = mouseX;
    }else if(piece22.style.cy <= 25) {
        piece22.style.cx = mouseX;
    }else if(piece2.style.cy <= 25) {
        piece2.style.cx = mouseX;
    }else if(piece23.style.cy <= 25) {
        piece23.style.cx = mouseX;
    }else if(piece3.style.cy <= 25) {
        piece3.style.cx = mouseX;
    }else if(piece24.style.cy <= 25) {
        piece24.style.cx = mouseX;
    }else if(piece4.style.cy <= 25) {
        piece4.style.cx = mouseX;
    }else if(piece25.style.cy <= 25) {
        piece25.style.cx = mouseX;
    }else if(piece5.style.cy <= 25) {
        piece5.style.cx = mouseX;
    }else if(piece26.style.cy <= 25) {
        piece26.style.cx = mouseX;
    }else if(piece6.style.cy <= 25) {
        piece6.style.cx = mouseX;
    }else if(piece27.style.cy <= 25) {
        piece27.style.cx = mouseX;
    }else if(piece7.style.cy <= 25) {
        piece7.style.cx = mouseX;
    }else if(piece28.style.cy <= 25) {
        piece28.style.cx = mouseX;
    }else if(piece8.style.cy <= 25) {
        piece8.style.cx = mouseX;
    }else if(piece29.style.cy <= 25) {
        piece29.style.cx = mouseX;
    }else if(piece9.style.cy <= 25) {
        piece9.style.cx = mouseX;
    }else if(piece30.style.cy <= 25) {
        piece30.style.cx = mouseX;
    }else if(piece10.style.cy <= 25) {
        piece10.style.cx = mouseX;
    }else if(piece31.style.cy <= 25) {
        piece31.style.cx = mouseX;
    }else if(piece11.style.cy <= 25) {
        piece11.style.cx = mouseX;
    }else if(piece32.style.cy <= 25) {
        piece32.style.cx = mouseX;
    }else if(piece12.style.cy <= 25) {
        piece12.style.cx = mouseX;
    }else if(piece33.style.cy <= 25) {
        piece33.style.cx = mouseX;
    }else if(piece13.style.cy <= 25) {
        piece13.style.cx = mouseX;
    }else if(piece34.style.cy <= 25) {
        piece34.style.cx = mouseX;
    }else if(piece14.style.cy <= 25) {
        piece14.style.cx = mouseX;
    }else if(piece35.style.cy <= 25) {
        piece35.style.cx = mouseX;
    }else if(piece15.style.cy <= 25) {
        piece15.style.cx = mouseX;
    }else if(piece36.style.cy <= 25) {
        piece36.style.cx = mouseX;
    }else if(piece16.style.cy <= 25) {
        piece16.style.cx = mouseX;
    }else if(piece37.style.cy <= 25) {
        piece37.style.cx = mouseX;
    }else if(piece17.style.cy <= 25) {
        piece17.style.cx = mouseX;
    }else if(piece38.style.cy <= 25) {
        piece38.style.cx = mouseX;
    }else if(piece18.style.cy <= 25) {
        piece18.style.cx = mouseX;
    }else if(piece39.style.cy <= 25) {
        piece39.style.cx = mouseX;
    }else if(piece19.style.cy <= 25) {
        piece19.style.cx = mouseX;
    }else if(piece40.style.cy <= 25) {
        piece40.style.cx = mouseX;
    }else if(piece20.style.cy <= 25) {
        piece20.style.cx = mouseX;
    }else if(piece41.style.cy <= 25) {
        piece41.style.cx = mouseX;
    }else if(piece21.style.cy <= 25) {
        piece21.style.cx = mouseX;
    }else if(piece42.style.cy <= 25) {
        piece42.style.cx = mouseX;
    }
}

// Adding an another  //
board.addEventListener("click" , dropPiece);


// Dropping the Piece //
function dropPiece() {
    
    // Piece 23 Checking for Collision //
    if (piece2.style.cy > 25) {
        if (piece23.style.cx == piece2.style.cx || piece23.style.cx == piece1.style.cx || piece23.style.cx == piece22.style.cx) {
            piece23.style.cy = piece2.style.cy - 100;
        } else {
        piece23.style.cy = 550;
        }
    }    

    // Piece 2 Checking for Collision //
    if (piece22.style.cy > 25) {
        if (piece2.style.cx == piece22.style.cx || piece2.style.cx == piece1.style.cx) {
            piece2.style.cy = piece22.style.cy - 100;
        } else {
        piece2.style.cy = 550;
        }
    }

    // Piece 22 Checking for Collision //
    if (piece1.style.cy > 25) {
        if (piece22.style.cx == piece1.style.cx) {
            piece22.style.cy = piece1.style.cy - 100;
        } else {
        piece22.style.cy = 550;
        }
    }

    // Piece 1 //
    piece1.style.cy = 550;

    console.log("click")
    //board.removeEventListener("mousemove" , setMouseCord)


}





// Making Sure Everything is working //
window.onload = function () {
    console.log(piece1);
    console.log(board);
}

