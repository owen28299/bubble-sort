function BubbleSort(){

  var count = 0;
  var isDone = false;

  function pass(arr){
    var swaps = 0;

    for (var i in arr){
      var curr = arr[i];
      var next = arr[Number(i) + 1];

      if (curr > next){
        arr[i] = next;
        arr[Number(i) + 1] = curr;
        count++;
        swaps++;
      }
    }

    if (swaps === 0){
      isDone = true;
      return false;
    }

    return arr;
  }


  function bubbleSortMoves(arr) {

    var bubbled = arr;

    while (isDone === false) {
      pass(bubbled);
    }

    return count;

  }

  function bubbleSort(arr) {

    var bubbled = arr;

    while (isDone === false) {
      pass(bubbled);

    }

    return bubbled;

  }

  function changeArrayPrototype(){

    Array.prototype.sortBubble = function(){
      var arr = this;
      return bubbleSort(arr);
    };

  }

  return {
    pass : pass,
    passInterval : passInterval,
    bubbleSortMoves : bubbleSortMoves,
    bubbleSort : bubbleSort,
    changeArrayPrototype : changeArrayPrototype
  };

}

var window = window || undefined;

if(!window){

  module.exports = BubbleSort;

}

