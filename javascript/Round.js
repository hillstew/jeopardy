
class Round {
  constructor() {
    this.turn = 1
    this.questions = []
    this.askedQuestions = []
    this.roundOver = false
    this.dailyDoubles = []
    this.data = data
  }

// createRound();

createRound() {
  const categories = this.createCategories();
  const categoryIds = this.getCategoryIds(categories);
}


  createCategories() {
    let categoryKeys = Object.keys(this.data.categories);
    let randoms = [];
      for (var i = 0; i < categoryKeys.length; i++) {

        let rand = categoryKeys[Math.floor(Math.random() * categoryKeys.length)]
          if (randoms.indexOf(rand) === -1) {
            randoms.push(rand)
          }  if (randoms.length > 4) {
            randoms.pop()
          }
        }
    
    return randoms;
  }

  getCategoryIds(categories) {
    return categories.map((category) => {
      return this.data.categories[category]
    })
  }

}