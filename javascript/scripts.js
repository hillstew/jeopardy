let player1;
let player2;
let player3;
let game = new Game();

$('.start-btn').on('click', () => {
  game.start();
  game.createPlayers();
});

$('.categories').on('click', (e) => {
  let category = $(e.target).siblings('.category-cards').text();
  let pointValue = parseInt($(event.target).text());
  game.matchQuestion(category, pointValue);
});

$('.answer-btn').on('click', () => {
  game.matchedQuestion.checkAnswer()
});
  








if (typeof module !== 'undefined') {
  module.exports = scripts;
}