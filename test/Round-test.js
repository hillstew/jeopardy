const chai = require('chai');
const expect = chai.expect;
global.data = require('../javascript/dataset.js')
const Round = require('../javascript/Round.js');
const spies = require('chai-spies')
chai.use(spies);

// describe('Round', () => {
//   let round;
//   beforeEach(() => {
//     round = new Round;
//   })

//   it('should create questions based off categories', () => {
//     round.getQuestions();
//   })

// })