/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const darts = require('../darts.js');

describe('score throws function', () => {
  it('should be a function', () => {
    expect(darts).to.be.a('function');
  });

  it('should return a number', () => {
    expect(darts([1,2,3])).to.be.a('number');
  });

  it('should add 10 points to the score when a 5 or lower is passed through', () => {
    expect(darts([1,2,6])).to.equal(25);
  });

  it('should add 5 points to the score when a number between 5 and 10 is passed through ', () => {
    expect(darts([6,6,6])).to.equal(15);
  });

  it('should add 0 points to the score when a number above 10 is passed through', () => {
    expect(darts([12,6,6])).to.equal(10);
  });

  it('should return a score of -1 if an empty array is passed through', () => {
    expect(darts([])).to.equal(-1);
  });

  it('should add 100 points to the score if all 3 radiuses are less than 5', () => {
    expect(darts([1,2,3])).to.equal(130);
  });

  it('should throw an error if anything but numbers are inputted', () => {
    expect(darts.bind(null,["asd",1,3])).to.throw('Whatcha smokin?!');
  });











});