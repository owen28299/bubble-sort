var leftmain;
var rightmain;

function quickSort(){

  var jumbled = numbersToSort;

  quick(jumbled);

  function quick(arr){

    var arr1 = arr.slice();

    var left = [];
    var right = [];
    var pivot = arr1.splice(0,1);

    for(var i = 0; i < arr1.length; i++){
      if(arr1[i] <= pivot){
        left.push(arr1[i]);
      }
      else {
        right.push(arr1[i]);
      }
    }

    if (left.length <= 1 && right.length <= 1){
      return left.concat(pivot,right);
    }

    else {

      left = quick(left);
      right = quick(right);

      leftmain = left.concat(pivot);
      rightmain = right;

      return left.concat(pivot,right);
    }

  }

}

function quickRender(){
  numbersToSort = [];

  var i = 0;

  var myInterval = setInterval(function(){

    if(leftmain[i]){
      numbersToSort.push(leftmain[i]);
      refresh();
    }

    if(rightmain[i]){
      ssArray.push(rightmain[i]);
      ssRefresh();
    }

    i++;

    if(!(leftmain[i]) && !(rightmain[i])){
      numbersToSort = leftmain.concat(rightmain);
      ssArray = [];
      refresh();
      ssRefresh();
      stopInterval();
    }

   }, 10);

  function stopInterval(){
    clearInterval(myInterval);
  }

}