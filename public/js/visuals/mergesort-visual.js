function mergesort() {

  var startArr = numbersToSort;
  divide(startArr);


  function divide(arr){

  if(arr.length <= 1){
    return arr;
  }

  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++){
    if(i % 2 === 0){
      left.push(arr[i]);
    }
    else{
      right.push(arr[i]);
    }
  }

  left = divide(left);
  right = divide(right);

  return merge(left,right);

  }

}

function merge(left,right){

  var result = [];

    while (left.length !== 0 && right.length !== 0){
      if(left[0] <= right[0]){
        result.push(left[0]);
        left.shift();
      }
      else {
        result.push(right[0]);
        right.shift();
      }
    }

    while (left.length !== 0){
      result.push(left[0]);
      left.shift();
    }

    while (right.length !== 0){
      result.push(right[0]);
      right.shift();
    }

    numbersToSort = result;
    refresh();

    return result;

  }
