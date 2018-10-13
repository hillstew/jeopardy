const domUpdates = {
  displayPlayers(player1, player2, player3) {
    let playerOneCard = document.querySelector('.player-one-card');
    let playerTwoCard = document.querySelector('.player-two-card');
    let playerThreeCard = document.querySelector('.player-three-card');
    playerOneCard.innerText = player1.name
    playerTwoCard.innerText = player2.name
    playerThreeCard.innerText = player3.name
  }

 



}



if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}