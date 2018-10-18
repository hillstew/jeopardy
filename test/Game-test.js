const chai = require('chai');
const expect = chai.expect;
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
    expect(game.categories.length).to.equal(4)
  });

});