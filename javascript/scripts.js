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
  $(e.target).text('X');
  $(e.target).removeClass('question-cards');
  $(e.target).addClass('question-no-hover');
});

$('.answer-btn').on('click', () => {
  game.matchedQuestion.checkAnswer();
  game.newRound(game.round);
});
  
$('.end-btn').on('click', () => {
  location.reload();
});




if (typeof module !== 'undefined') {
  module.exports = scripts;
}