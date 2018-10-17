class Game {
  constructor(round, players, winner) {
    this.roundNumber = 0,
    this.players = [],
    this.winner = winner,
    this.categories = [],
    this.questions = []
  }

  start() {
    this.createCategories()
    this.getQuestions(this.categories)
    domUpdates.displayCategories(this.categories)
  }

  createPlayers() {
    let playerOne = $('.player-one').val();
    let playerTwo = $('.player-two').val();
    let playerThree = $('.player-three').val();
    let player1 = new Player(playerOne);
    let player2 = new Player(playerTwo);
    let player3 = new Player(playerThree);
    this.players.push(player1.name, player2.name, player3.name)
    domUpdates.displayPlayers(player1, player2, player3)
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

  getQuestions(categories) {
   this.questions = categories.reduce((array, category) => {
      let clues = data.clues.filter(clue => {
        return clue.categoryId === data.categories[category]
        })
      array.push(...clues.slice(0, 5))
      return array;
    }, []).map(question => {
    return new Question(question)
    }) 
  }

  matchQuestion(category, pointValue) {
    this.questions.find(question => {
      if (question.pointValue === pointValue
          && question.categoryId === data.categories[category]) {
          $('.question-window').css('z-index', '1')
          $('.question-clue').text(question.question)
        }
      })
    }
  }



  // reset() {
  // }

  // updateRound() {
  // }

  // declareWinner() {
  // }

  // startNewRound() {
  //   this.roundNumber++;
  //   this.round = new Round();
  // }




if (typeof module !== 'undefined') {
  module.exports = Game;
}

