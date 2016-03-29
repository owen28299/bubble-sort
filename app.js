function bubbleSortMoves(arr) {

  var bubbled = arr;
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
    }

    return arr;
  }

  while (isDone === false) {
    pass(bubbled);

  }

  return count;

}



function changeArrayPrototype(){

  function bubbleSort(arr) {

  var bubbled = arr;
  var isDone = false;

  function pass(arr){
    var swaps = 0;

    for (var i = 0; i < arr.length; i++){
      var curr = arr[i];
      var next = arr[Number(i) + 1];

      if (curr > next){
        arr[i] = next;
        arr[Number(i) + 1] = curr;
        swaps++;
      }
    }

    if (swaps === 0){
      isDone = true;
    }

    return arr;
  }

  while (isDone === false) {
    pass(bubbled);

  }

  return bubbled;

  }

  Array.prototype.sortBubble = function(){
    var arr = this;
    return bubbleSort(arr);
  };

}

module.exports = {
  bubbleSortMoves : bubbleSortMoves,
  changeArrayPrototype : changeArrayPrototype
};
