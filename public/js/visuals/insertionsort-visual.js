function insertionSort(){
  var temp;
  var i = 1;
  var end = numbersToSort.length;


  function onepass(){

      temp = numbersToSort[i];

      for (var j = i - 1; j >= 0; j--){
        if (temp <= numbersToSort[j]){
          numbersToSort.splice(j+1,1);
          numbersToSort.splice(j,0,temp);
        }
      }

      refresh();

      i++;

      if (i === end) {
        stopInterval();
      }

  }

  if(numbersToSort !== undefined && numbersToSort.length !== 0) {
    var once = setInterval(function(){
      onepass();
    },10);
  }

  function stopInterval(){
    clearInterval(once);
  }


  return numbersToSort;
}