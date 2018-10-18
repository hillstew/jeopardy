const domUpdates = {
  hideInputs() {
    $('.player-one').hide()
    $('.player-two').hide()
    $('.player-three').hide()
  },
  displayPlayers(player1, player2, player3) {
    domUpdates.hideInputs();
    domUpdates.displayCards();
    $('.player-one-card').text(player1.name);
    $('.player-two-card').text(player2.name);
    $('.player-three-card').text(player3.name);
  },
  displayScore(player1, player2, player3) {
    $('.player-one-score').text(`SCORE: ${player1.score}`)
    $('.player-two-score').text(`SCORE: ${player2.score}`)
    $('.player-three-score').text(`SCORE: ${player3.score}`)
  },
  displayCategories(categories) {
    $('.category-card-one').text(categories[0])
    $('.category-card-two').text(categories[1])
    $('.category-card-three').text(categories[2])
    $('.category-card-four').text(categories[3])
  },
  displayCards() {
    $('.player-cards').css('display', 'inline');
  }

}




if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}