function bubbleSort(){

  var i = 0;
  var stop = numbersToSort.length - 1;
  var moves = 0;

  function onePass() {
    var curr = numbersToSort[i];
    var next = numbersToSort[Number(i) + 1];

    if (curr > next){
      numbersToSort[i] = next;
      numbersToSort[Number(i) + 1] = curr;
      moves++;
    }

    i++;

    refresh();

    if(i === stop){

      if(moves === 0){
        isDone = true;
        console.log('isDone', isDone);
      }

      stopInterval();

      if(isDone === false){
        bubbleSort();
      }

    }

  }

  var myInterval = setInterval(function(){
    onePass();
  }, 10);

  function stopInterval(){
    clearInterval(myInterval);
  }

}