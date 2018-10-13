class Game {
  constructor(round, players, winner) {
    this.round = 0,
    this.players = [],
    this.winner = winner,
    this.categories = []
  }

  createPlayers() {
    let player1 = new Player('')
  }


  start() {
    this.createCategories()
  }

  reset() {
  }

  updateRound() {
  }

  declareWinner() {
  }

  createCategories() {
    let categoryKeys = Object.entries(data.categories);
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

