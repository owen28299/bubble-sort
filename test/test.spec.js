var bs = require("../public/js/bubblesort.js");
var qs = require("../public/js/quicksort.js");
var insertion = require("../public/js/insertionsort.js");
var ss = require("../public/js/selectionsort.js");
var ms = require("../public/js/mergesort.js");
var chai = require('chai');
var expect = chai.expect;

var newBs = bs();


describe('bubble sort moves', function(){

  it('should return a number', function(){
    expect(bs().bubbleSortMoves).to.be.a('function');
    expect(bs().bubbleSortMoves([1])).to.be.a('number');
  });

  it('should return the correct number of moves in a sort', function(){
    expect(bs().bubbleSortMoves([1])).to.equal(0);
    expect(bs().bubbleSortMoves([1,2])).to.equal(0);
    expect(bs().bubbleSortMoves([2,1])).to.equal(1);
    expect(bs().bubbleSortMoves([2,1])).to.equal(1);
    expect(bs().bubbleSortMoves([5,1,4,2,8])).to.equal(4);
    expect(bs().bubbleSortMoves([5,4,3,2,1])).to.equal(10);
    expect(bs().bubbleSortMoves([-1,-2,-3,-4,-5])).to.equal(10);
  });

});

describe('bubble sort array method', function(){
  it('should be a function', function(){
    expect(bs().changeArrayPrototype).to.be.a('function');
  });

  bs().changeArrayPrototype();
  var arr1 = [3,2,1];

  it('should allow the Array prototype to bubble sort', function(){

    expect(arr1.sortBubble()).to.be.an('array');
    expect(arr1.sortBubble()).to.deep.equal([1,2,3]);

  });


});

describe('quick sort', function(){

  it('should be a function', function(){
    expect(qs).to.be.a('function');
  });

  it('should return an array', function(){
    expect(qs([3,2,1])).to.be.an('array');
  });

  it('should sort the array', function(){
    expect(qs([3,5,7,8,9,11,13,15,2,1])).to.deep.equal([ 1, 2, 3, 5, 7, 8, 9, 11, 13, 15 ]);
  });

});

describe('insertion sort', function(){

  it('should be a function', function(){
    expect(insertion).to.be.a('function');
  });

  it('should return an array', function(){
    expect(insertion([3,2,1])).to.be.an('array');
  });

  it('should sort the array', function(){
    expect(insertion([3,5,7,8,9,11,13,15,2,1])).to.deep.equal([ 1, 2, 3, 5, 7, 8, 9, 11, 13, 15 ]);
  });

});

describe('selection sort', function(){

  it('should be a function', function(){
    expect(ss).to.be.a('function');
  });

  it('should return an array', function(){
    expect(ss([3,2,1])).to.be.an('array');
  });

  it('should sort the array', function(){
    expect(ss([3,5,7,8,9,11,13,15,2,1])).to.deep.equal([ 1, 2, 3, 5, 7, 8, 9, 11, 13, 15 ]);
  });

});

describe('merge sort', function(){

  it('should be a function', function(){
    expect(ms).to.be.a('function');
  });

  it('should return an array', function(){
    expect(ms([3,2,1])).to.be.an('array');
  });

  it('should sort the array', function(){
    expect(ms([3,5,7,8,9,11,13,15,2,1])).to.deep.equal([ 1, 2, 3, 5, 7, 8, 9, 11, 13, 15 ]);
  });

});