class Question {
  constructor(clue) {
    this.categoryId = clue.categoryId;
    this.answer = clue.answer;
    this.question = clue.question;
    this.pointValue = clue.pointValue;
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

