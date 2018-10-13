let startButton = document.querySelector('.start-btn')

startButton.addEventListener('click', () => {
  createPlayers()
  displayPlayers()
})

function createPlayers() {
  let playerOne = document.querySelector('.player-one')
  let playerTwo = document.querySelector('.player-two')
  let playerThree = document.querySelector('.player-three')
  let player1 = new Player(playerOne.value);
  let player2 = new Player(playerTwo.value);
  let player3 = new Player(playerThree.value);
  console.log(player1, player2, player3)
}




