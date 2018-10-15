class Game {
  constructor(round, players, winner) {
    this.roundNumber = 0,
    this.players = [],
    this.winner = winner,
    this.categories = []
    // this.round = new Round();
  }

  start() {
    this.createCategories()
    // domUpdates.displayPlayers(this.players)
    domUpdates.displayCategories(this.categories)
  }

  createPlayers() {
  let player1 = new Player(playerOne.value);
  let player2 = new Player(playerTwo.value);
  let player3 = new Player(playerThree.value);
  domUpdates.displayPlayers(player1, player2, player3)
  // What's the differene between this.players and game.players?
  this.players.push(player1.name, player2.name, player3.name)
  }

  reset() {
  }

  updateRound() {
  }

  declareWinner() {
  }

  startNewRound() {
    this.roundNumber++;
    this.round = new Round();
  }

  createCategories() {
    let categoryKeys = Object.keys(data.categories);
    let randoms = [];
      for (var i = 0; i < categoryKeys.length; i++) {
        let rand = categoryKeys[Math.floor(Math.random() * categoryKeys.length)]
        if (randoms.indexOf(rand) === -1) {
          randoms.push(rand)
        }  if (randoms.length > 4) {
            randoms.pop()
          }
      }
      return this.categories.push(...randoms);
    }
  }


if (typeof module !== 'undefined') {
  module.exports = Game;
}

