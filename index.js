const squares = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset");
const turnDisplay = document.querySelector("#turn");
let currentPlayer = "X";
let gameOver = false;

for(let i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", function(){
    if(!this.innerHTML && !gameOver){
      this.innerHTML = `<span class="${currentPlayer}">${currentPlayer}</span>`;
      turnDisplay.innerHTML = `Player ${currentPlayer === "X" ? "O" : "X"}'s turn`;

      if(checkForWinner(this)){
        turnDisplay.innerHTML = `Player ${currentPlayer} wins!`;
        gameOver = true;
        return;
      }

      if(currentPlayer === "X"){
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
}

resetButton.addEventListener("click", function(){
  for(let i = 0; i < squares.length; i++){
    squares[i].innerHTML = "";
    squares[i].classList.remove("winner");
  }

  turnDisplay.innerHTML = "Player X's turn";
  currentPlayer = "X";
  gameOver = false;

});


function checkForWinner(clickedSquare) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
    
  ];

  for(let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if(squares[a].innerHTML === clickedSquare.innerHTML &&
       squares[b].innerHTML === clickedSquare.innerHTML &&
       squares[c].innerHTML === clickedSquare.innerHTML 
      ){
        squares[a].classList.add("winner");
        squares[b].classList.add("winner");
        squares[c].classList.add("winner");
        return true;
      }
  }

}