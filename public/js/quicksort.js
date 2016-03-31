var arrayvisual;

function quickSort(arr){

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

    left = quickSort(left);
    right = quickSort(right);

    return left.concat(pivot,right);
  }

}


var window = window || undefined;

if(!window){

  module.exports = quickSort;

}

var jArray = [3,5,7,8,9,11,13,15,2,1];
console.log("answer", quickSort(jArray));

