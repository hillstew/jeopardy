const chai = require('chai');
const expect = chai.expect;
const Question = require('../javascript/Question.js');
const spies = require('chai-spies')
const Game = require('../javascript/Game.js');
chai.use(spies);

describe('Question', () => {
  let game;
  beforeEach(() => {
    game = new Game;
  });

  it.skip('should have 4 properties', () => {
    game.start();
    game.createPlayers();
    let question = new Question
    expect(question).to.have.properties(4)
  });
});