class Question {
  constructor(clue) {
    this.categoryId = clue.categoryId;
    this.answer = clue.answer;
    this.question = clue.question;
    this.pointValue = clue.pointValue;
  }

  checkAnswer() {
    let currentPlayer = game.players.find(player => {
      return player.turn; 
    })
    if ($('.answer-input').val() === this.answer){
    $('.question-window').css('z-index', '-1');
    }
    game.changePlayer(currentPlayer)
    currentPlayer.score += this.pointValue;
  }

}

class DailyDouble extends Question {
  constructor(clue) {
    super(clue)
  }
  checkUserMinimum() {

  }
  checkWagerValidity() {
    
  }
}

