class Question {
  constructor(clue) {
    this.categoryId = clue.categoryId;
    this.answer = clue.answer;
    this.question = clue.question;
    this.pointValue = clue.pointValue;
  }

  checkAnswer() {
    if ($('.answer-input').val() === this.answer){
      
    }
    $('.question-window').css('z-index', '-1');
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

