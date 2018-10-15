const domUpdates = {
  displayPlayers(player1, player2, player3) {
    let playerOneCard = document.querySelector('.player-one-card');
    let playerTwoCard = document.querySelector('.player-two-card');
    let playerThreeCard = document.querySelector('.player-three-card');
    playerOneCard.innerText = player1.name;
    playerTwoCard.innerText = player2.name;
    playerThreeCard.innerText = player3.name;
  },
  displayCategories(categories) {
    console.log(categories);
    $('.category-card-one').text(categories[0])
    $('.category-card-two').text(categories[1])
    $('.category-card-three').text(categories[2])
    $('.category-card-four').text(categories[3])
  }
}




if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}