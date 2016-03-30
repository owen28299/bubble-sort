var numbersToSort;
var isDone = false;

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

function passInterval(){

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
        passInterval();
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

document.getElementById('submit').addEventListener('click', function(){
  numbersToSort = parseInput();
  refresh();
});

document.getElementById('bubble_sort').addEventListener("click", function(){
  isDone = false;
  passInterval();
});

document.getElementById('random').addEventListener("click", function(){
  randomList();
});
