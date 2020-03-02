console.log('APP is connected!')


// IF we want a warning for starting player (we set it to x)
function startGame() {

  for (var i = 1; i <=9; i++){
    clearBox(i);
  }

  var playerName = ['X', 'O']
  document.player = playerName[Math.floor(Math.random()*2)]
  document.winner = ''
  setMessage(document.player + ' gets to start');
}

function setMessage(msg) {
  document.getElementById('message').innerText = msg;
}

//to simplify, let's just start by hardcoding the startingplayer as X
// document.player = 'X';
// function alternates between x and o depending on who's turn it is
function changePlayer() {
  if (checkForWinner(document.player)){
    setMessage('congrats ' + document.player + '! You win!')
    document.winner = document.player
    // alert(document.player + ' WINS!')
  }    else if(
    getBox(1) && getBox(2) && getBox(3) && getBox(4) && getBox(5) && getBox(6) && getBox(7) && getBox(8) && getBox(9)
  ){
    setMessage('BOTH OF Y\'ALL LOSERS')
    // alert('all spaces filled')

  }
  else if (document.player === 'X'){
    document.player = 'O';
    setMessage(document.player + ':                                     pick your spot!')
  }else{
    document.player = 'X';
    setMessage(document.player + ': pick your spot!')
  }

}

//if this is called, change the innerText to whichever player
function nextMove(inputBox){
  if (document.winner !== ''){
    alert(document.player + ' already won!')
  }
  else if (inputBox.innerText === ''){
    inputBox.innerText = document.player;
    changePlayer();

  }else{
    alert('hey ' + document.player + '! ' + 'You goddam cheater, that\'s my spot')
    setMessage('Watch out! ' + document.player + ' is trying to cheat!')
  }
}


//checking for winner and helper functions
function checkForWinner (move) {
  var result = false;
  if (check3InARow(1,2,3, move) || check3InARow(4,5,6, move) || check3InARow(7,8,9, move) || check3InARow(1,4,7, move) || check3InARow(2,5,8, move) || check3InARow(3,6,9, move) || check3InARow(1,5,9, move) || check3InARow(3,5,7, move) ){
    result = true;
  }
  return result;
}

//check if 3 things are equal.
function check3InARow(a,b,c, move) {
  var result = false;
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move){
    result = true;
  }
  return result;
}

//obtains the value that is at a given box (x or o)
function getBox(number) {
  return document.getElementById('b'+ number).innerText;
}

//clears everything
function clearBox(number){
  document.getElementById('b' + number).innerText = '';
}