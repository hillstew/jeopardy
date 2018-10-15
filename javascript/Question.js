class Question {
  constructor(catergoryId, answer, question, pointValue) {
    this.catergoryId = catergoryId;
    this.answer = answer;
    this.question = question;
    this.pointValue = pointValue;
  }
}

class DailyDouble extends Question {
  constructor(catergoryId, answer, question, pointValue) {
    super(catergoryId, answer, question, pointValue)
  }
  checkUserMinimum() {

  }
  checkWagerValidity() {
    
  }
}

