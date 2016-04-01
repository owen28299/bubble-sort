function selectionSort(){

  var end = numbersToSort.length;

  var sArr = [];
  var uArr = numbersToSort.slice();

  function findLowest(arr){
    var lowest = Infinity;
    var index;

    for (var i = 0; i < arr.length; i++){
      if(arr[i] <= lowest){
        lowest = arr[i];
        index = i;
      }
    }

    return index;
  }

  var j = 0;

  function onepass(){

    var lindex = findLowest(uArr);

    sArr.push(uArr[lindex]);
    uArr.splice(lindex,1);

    numbersToSort = uArr;
    ssArray = sArr;

    refresh();
    ssRefresh();

    j++;

    if(j === end){
      stopInterval();
    }


  }

  if(numbersToSort !== undefined && numbersToSort.length !== 0) {
    var once = setInterval(function(){
      onepass();
    },100);
  }

  function stopInterval(){
    clearInterval(once);
  }




}