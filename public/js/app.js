var numbersToSort;
var isDone = false;
var ssArray = [];

function randomList(){
  var randArr = [];
  for(var r = 1; r <= 30; r++){
    randArr.push(r);
  }

  randArr.forEach(function(element, index, array) {
    var rindex = Math.floor(Math.random() * array.length);
    var curr = randArr[index];
    var other = randArr[rindex];

    randArr[index] = other;
    randArr[rindex] = curr;

  });

  numbersToSort = randArr;

  refresh();
}

function parseInput(){
  var myArray = document.getElementById('array').value;

  myArray = myArray.split(",").map(function(element){
    return JSON.parse(element);
  });

  return myArray;
}

function refresh(){
  document.getElementById("numbers_list").innerHTML = "";

  numbersToSort.forEach(function(element){
    var block = "<li style=height:" + 15 * element + "px;>" + element + "</li>";
    document.getElementById("numbers_list").innerHTML += block;
  });
}

function ssRefresh(){
  document.getElementById("numbers_list2").innerHTML = "";

  ssArray.forEach(function(element){
    var block = "<li style=height:" + 15 * element + "px;>" + element + "</li>";
    document.getElementById("numbers_list2").innerHTML += block;
  });
}

document.getElementById('submit').addEventListener('click', function(){
  numbersToSort = parseInput();
  refresh();
});

document.getElementById('bubble_sort').addEventListener("click", function(){
  isDone = false;
  bubbleSort();
});

document.getElementById('random').addEventListener("click", function(){
  document.getElementById("numbers_list2").innerHTML = "";
  randomList();
});

document.getElementById('insertion_sort').addEventListener("click", function(){
  insertionSort();
});

document.getElementById('selection_sort').addEventListener("click", function(){
  selectionSort();
});

document.getElementById('quick_sort').addEventListener("click", function(){
  quickSort();
  quickRender();
});

document.getElementById('merge_sort').addEventListener("click", function(){
  mergesort();
});