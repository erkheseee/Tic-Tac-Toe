const Gameboard = (() => {
    var field = ['e','e','e','e','e','e','e','e','e'];
    return{field};
})();

const handleClick = (id) => {
    const tag = document.getElementById(id);
    if(tag.value != null) console.log("This box has been clicked!")
    else{
        if(displayController.turn == true){
            tag.src = "./pics/x.png";
            tag.value = "x";
            Gameboard.field[tag.id] = "x";
            displayController.counter++;
            displayController.turn = false;
            setTimeout(()=> {checkWin();},500);
            
        }
        else{
            tag.src = "./pics/o.png";
            tag.value = "o";
            Gameboard.field[tag.id] = "o";
            displayController.counter++;
            displayController.turn = true;
            setTimeout(()=> {checkWin();},500);
        }
    }
};

const checkWin = () => {
    if((Gameboard.field[0] == 'x' && Gameboard.field[1] == 'x' && Gameboard.field[2] == 'x') || 
    (Gameboard.field[3] == 'x' && Gameboard.field[4] == 'x' && Gameboard.field[5] == 'x') ||
    (Gameboard.field[6] == 'x' && Gameboard.field[7] == 'x' && Gameboard.field[8] == 'x') ||
    (Gameboard.field[0] == 'x' && Gameboard.field[3] == 'x' && Gameboard.field[6] == 'x') ||
    (Gameboard.field[1] == 'x' && Gameboard.field[4] == 'x' && Gameboard.field[7] == 'x') ||
    (Gameboard.field[2] == 'x' && Gameboard.field[5] == 'x' && Gameboard.field[8] == 'x') ||
    (Gameboard.field[0] == 'x' && Gameboard.field[4] == 'x' && Gameboard.field[8] == 'x') ||
    (Gameboard.field[2] == 'x' && Gameboard.field[4] == 'x' && Gameboard.field[6] == 'x')){
        alert("Player 1 won");
        resetGame.resetGame('x');
    }
    
    if((Gameboard.field[0] == 'o' && Gameboard.field[1] == 'o' && Gameboard.field[2] == 'o') || 
    (Gameboard.field[3] == 'o' && Gameboard.field[4] == 'o' && Gameboard.field[5] == 'o') ||
    (Gameboard.field[6] == 'o' && Gameboard.field[7] == 'o' && Gameboard.field[8] == 'o') ||
    (Gameboard.field[0] == 'o' && Gameboard.field[3] == 'o' && Gameboard.field[6] == 'o') ||
    (Gameboard.field[1] == 'o' && Gameboard.field[4] == 'o' && Gameboard.field[7] == 'o') ||
    (Gameboard.field[2] == 'o' && Gameboard.field[5] == 'o' && Gameboard.field[8] == 'o') ||
    (Gameboard.field[0] == 'o' && Gameboard.field[4] == 'o' && Gameboard.field[8] == 'o') ||
    (Gameboard.field[2] == 'o' && Gameboard.field[4] == 'o' && Gameboard.field[6] == 'o')){
        alert("Player 2 won");
        resetGame.resetGame('o');
    }

    if(displayController.counter == 9){
        alert("The game is tied");
        resetGame.resetGame();
    }
}

const Player = () => {
    var score = 0;
    const changeScore = () => {
        score++;
        return score;
    }
    return{changeScore};
};

const displayController = (() => {
    var turn = true;
    const p1 = Player();
    const p2 = Player();
    var counter = 0;
    const changeScore = (prop) => {
        if(prop == 'x'){
            document.getElementById('p1').innerHTML = p1.changeScore();

        }
        if(prop == 'o'){
            document.getElementById('p2').innerHTML = p2.changeScore();
        }
        else null;
    }
    return{counter, changeScore, turn};
})();

const resetGame = (() => {
    const resetGame = (prop) => {
        displayController.changeScore(prop);
        Gameboard.field = ['e','e','e','e','e','e','e','e','e'];
        for(var i=0; i<9; i++){
            document.getElementById(i).src = "./pics/empty.png";
            document.getElementById(i).value = null;
        }
        displayController.counter = 0;
        displayController.turn = true;
    }
    return{resetGame};
})();