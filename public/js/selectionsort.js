function selectionsort(arr){
  var end = arr.length;

  var sArr = [];
  var uArr = arr.slice();

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

  for (var j = 0; j < end; j++){
    var lindex = findLowest(uArr);

    sArr.push(uArr[lindex]);
    uArr.splice(lindex,1);
  }

  return sArr;

}

var tossort = [3,3,5,7,8,9,11,13,15,2,1];
console.log('selectionsort(tossort)', selectionsort(tossort));

var window = window || undefined;

if(!window){

  module.exports = selectionsort;

}