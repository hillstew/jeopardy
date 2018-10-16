const domUpdates = {
  displayPlayers(player1, player2, player3) {
    $('.player-one-card').text(player1.name);
    $('.player-two-card').text(player2.name);
    $('.player-three-card').text(player3.name);
  },
  displayCategories(categories) {
    $('.category-card-one').text(categories[0])
    $('.category-card-two').text(categories[1])
    $('.category-card-three').text(categories[2])
    $('.category-card-four').text(categories[3])
  }
}




if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}