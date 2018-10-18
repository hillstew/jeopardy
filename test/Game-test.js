const chai = require('chai');
const expect = chai.expect;
const Question = require('../javascript/Question.js')
const Game = require('../javascript/Game.js');
const spies = require('chai-spies')
chai.use(spies);

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game;
  });

  it('should start the game', () => {
    game.start();
    expect(game.createCategories).to.have.been.called(1);
    expect(game.getQuestions).to.have.been.called(1);
    expect(domUpdates.displayCategories).to.have.been.called(1);
  });

  it('should instantiate players', () => {
    game.createPlayers();
    expect(game.players.length).to.equal(3)
    expect(domUpdates.displayPlayers).to.have.been.called(1);
  });

  it('should return four random categories', () => {
    game.createCategories();
    expect(game.categories.length).to.equal(4);
  });

  it('should change player turn', () => {
    game.changePlayer(player);
    game.changePlayer(player);
    game.changePlayer(player);
    expect(currentPlayer(player)).to.equal(true)
  });

  it('should return twenty questions', () => {
    game.getQuestions(categories);
    expect(game.questions.length).to.equal(20)
  });

  it('should match question to category', () => {
    game.matchQuestion(category, pointValue);
    expect(game.matchedQuestion.category).to.equal(category);
    expect(game.matchedQuestion.pointValue).to.equal(pointValue);
  });

});