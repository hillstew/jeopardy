let playerOne = $('.player-one');
let playerTwo = $('.player-two');
let playerThree = $('.player-three');
let game = new Game();
let round = new Round();


$('.start-btn').on('click', () => {
  game.start();
  game.createPlayers();
})

$('.categories').on('click', (e) => {
  let category = $(event.target).siblings('.category-cards').text();
  let pointValue = parseInt($(event.target).text());
  game.matchQuestion(category, pointValue);
  console.log('click event: ', typeof pointValue)
})









if (typeof module !== 'undefined') {
  module.exports = scripts;
}