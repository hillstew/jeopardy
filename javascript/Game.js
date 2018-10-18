class Game {
  constructor(round, players, winner) {
    this.roundNumber = 0;
    this.players = [];
    this.winner = winner;
    this.categories = [];
    this.questions = [];
    this.matchedQuestion = undefined;
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
    player1 = new Player(playerOne, true);
    player2 = new Player(playerTwo, false);
    player3 = new Player(playerThree, false);
    this.players.push(player1, player2, player3)
    domUpdates.displayPlayers(player1, player2, player3)
  }

  createCategories() {
    let categoryKeys = Object.keys(data.categories);
    let randoms = [];
    for (var i = 0; i < categoryKeys.length; i++) {
      let rand = categoryKeys[Math.floor(Math.random() * categoryKeys.length)]
      if (!randoms.includes(rand)) {
        randoms.push(rand)
      } if (randoms.length > 4) {
        randoms.pop()
      }
    }
    return this.categories.push(...randoms);
  }

  changePlayer(player) {
    let currentIndex = this.players.indexOf(player);
    this.players[currentIndex].turn = false;
    if ((currentIndex + 1) >= this.players.length) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    this.players[currentIndex].turn = true;
  }

  getQuestions(categories) {
    this.questions = categories.reduce((array, category) => {
      let clues = data.clues.filter(clue => {
        return clue.categoryId === data.categories[category]
      });
      array.push(...clues.slice(0, 5))
      return array;
    }, []).map(question => {
      return new Question(question)
    });
  }

  matchQuestion(category, pointValue) {
   this.matchedQuestion = this.questions.find(question => {
      return question.pointValue === pointValue
          && question.categoryId === data.categories[category]
    });
        $('.question-window').css('z-index', '1');
        $('.question-clue').text(this.matchedQuestion.question);
   console.log(this.matchedQuestion)
  }
}




if (typeof module !== 'undefined') {
  module.exports = Game;
}

