console.log('APP is connected!')



// document.getElementById("tr").addEventListener("click", console.log('did click!'));

// warning for starting player (we set it to x)
function startGame() {
  document.turn = 'X';

  setMessage(document.turn + ' gets to start');
}

function setMessage(msg) {
  document.getElementById('message').innerText = msg;
}