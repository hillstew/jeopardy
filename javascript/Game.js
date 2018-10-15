class Game {
  constructor(round, players, winner) {
    this.round = 0,
    this.players = [],
    this.winner = winner,
    this.categories = []
  }

  start() {
    this.createCategories()
    // domUpdates.displayPlayers(this.players)
    domUpdates.displayCategories(...this.categories)
  }

  reset() {
  }

  updateRound() {
  }

  declareWinner() {
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
      return this.categories.push(randoms);
    }
  }




if (typeof module !== 'undefined') {
  module.exports = Game;
}

