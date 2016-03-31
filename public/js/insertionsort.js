function insertionsort(arr){

  console.log('arr', arr);

  var arr1 = arr.slice();

  var temp;

  for (var i = 1; i < arr1.length; i++){
    temp = arr1[i];

    for (var j = i - 1; j >= 0; j--){
      if (temp <= arr1[j]){
        arr1.splice(j+1,1);
        arr1.splice(j,0,temp);
      }
    }
  }

  return arr1;

}

var window = window || undefined;

if(!window){

  module.exports = insertionsort;

}

var thisArr = [5,4,3,2,1];
console.log('insertionsort(thisArr)', insertionsort(thisArr));