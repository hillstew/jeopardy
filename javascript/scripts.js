let playerOne = document.querySelector('.player-one');
let playerTwo = document.querySelector('.player-two');
let playerThree = document.querySelector('.player-three');
let game = new Game();
// let round = new Round();



$('.start-btn').on('click', () => {
  game.start();
  game.createPlayers();
})









if (typeof module !== 'undefined') {
  module.exports = scripts;
}