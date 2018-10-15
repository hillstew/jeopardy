class Round {
  constructor() {
    this.turn = 1;
    this.askedQuestions = [];
    this.roundOver = false;
    this.dailyDoubles = [];
    this.data = data;
    this.createRound();
  }

createRound() {
  this.categories = this.createCategories();

  const categoryIds = this.getCategoryIds(categories);
}

createCategories() {
  let categoryKeys = Object.keys(this.data.categories);
  let randoms = [];
    for (var i = 0; i < categoryKeys.length; i++) {
      let rand = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
        if (randoms.indexOf(rand) === -1) {
          randoms.push(rand)
        } if (randoms.length > 4) {
          randoms.pop()
        }
      }
  
  return randoms;
}

getQuestions(categories) {
  let categories = data.clues.reduce((obj, item) => {
  if(randoms.indexOf(item.categoryId) > -1) {
    if(obj[item.categoryId] == null)  
    obj[item.categoryId] = [];
    obj[item.categoryId].push(item);
  }
  return obj;
  }, {});

  let categoryQuestions = {};

  Object.keys(categories).forEach((catKey) => {
  const cat = categories[catKey];
  let current = 100;

  const clues = cat.reduce((acc, data) => {
    if (data.pointValue === current) {
      current = current + 100
      acc.push(data)
    }
    return acc;
  }, [])

  if(!categoryQuestions[catKey])
    categoryQuestions[catKey] = {};
    categoryQuestions[catKey].questions = clues;
  })
}
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}


  createCategories() {
    let categoryKeys = Object.keys(this.data.categories);
    let randoms = [];
    for (var i = 0; i < categoryKeys.length; i++) {

      let rand = categoryKeys[Math.floor(Math.random() 
                    * categoryKeys.length)]
      if (randoms.indexOf(rand) === -1) {
        randoms.push(rand)
      }  if (randoms.length > 4) {
        randoms.pop()
      }
    }
    
    return randoms;
  }

