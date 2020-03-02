console.log('APP is connected!')


// IF we want a warning for starting player (we set it to x)
function startGame() {
  document.player = 'X';
  setMessage(document.player + ' gets to start');
}

function setMessage(msg) {
  document.getElementById('message').innerText = msg;
}

//to simplify, let's just start by hardcoding the startingplayer as X
// document.player = 'X';
// function alternates between x and o depending on who's turn it is
function changePlayer() {
  if (document.player === 'X'){
    document.player = 'O'
  }else{
    document.player = 'X'
  }
  setMessage('Go ' + document.player + '!')
}

//if this is called, change the innerText to whichever player
function nextMove(inputBox){
  if (inputBox.innerText){
    return
  }
  inputBox.innerText = document.player;
  changePlayer();
}