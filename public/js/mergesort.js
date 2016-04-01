function mergesort(arr){

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

    return result;

  }

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

  left = mergesort(left);
  right = mergesort(right);

  return merge(left,right);

}


console.log(mergesort([10,9,8,7,6,5,4,3,2,1]));

var window = window || undefined;

if(!window){

  module.exports = mergesort;

}