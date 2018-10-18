global.domUpdates = require('../javascript/domUpdates.js');
const chai = require('chai');
const expect = chai.expect;
const Game = require('../javascript/Game.js');
const spies = require('chai-spies')
chai.use(spies);


describe('domUpdates', () => {
  let game;
  beforeEach(() => {
    game = new Game;
  });

  it.skip('should declare hideInputs', () => {
    domUpdates.displayPlayers()
    expect(hideInputs).to.have.been.called(1)
  });
  it.skip('should declare displayPlayers', () => {

  });
  it.skip('should declare displayScore', () => {

  });
  it.skip('should declare displayCategories', () => {

  });
  it.skip('should declare displayCards', () => {

  });

});


