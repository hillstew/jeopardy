let playerOne = document.querySelector('.player-one');
let playerTwo = document.querySelector('.player-two');
let playerThree = document.querySelector('.player-three');
let game = new Game();



$('.start-btn').on('click', () => {
  createPlayers();
  game.start();
})

createPlayers = () => {
  let player1 = new Player(playerOne.value);
  let player2 = new Player(playerTwo.value);
  let player3 = new Player(playerThree.value);
  domUpdates.displayPlayers(player1, player2, player3)
  game.players.push(player1.name, player2.name, player3.name)
}










if (typeof module !== 'undefined') {
  module.exports = scripts;
}