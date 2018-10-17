let game = new Game();
let round = new Round();

$('.start-btn').on('click', () => {
  game.start();
  game.createPlayers();
})

$('.answer-btn').on('click', game.removeWindow);


$('.categories').on('click', (e) => {
  let category = $(e.target).siblings('.category-cards').text();
  let pointValue = parseInt($(event.target).text());
  game.matchQuestion(category, pointValue);
  // $(e.target).text('');
})









if (typeof module !== 'undefined') {
  module.exports = scripts;
}