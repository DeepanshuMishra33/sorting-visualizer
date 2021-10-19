var arraySize = 30;
let min = 0;
let max = 100;
let arr = [arraySize];
var arrayDiv = new Array();

//BARS CREATION
var newArray = document.getElementById("new-array");
newArray.addEventListener("click", function () {
  var currBars = document.querySelectorAll(".bars");

  fillArray();
  createBars(arrayDiv, currBars.length);
});

function fillArray() {
  for (var i = 0; i < arraySize; i++) {
    arr[i] = Math.floor(Math.random() * (max - min) + min);
    if (arr[i] == arr[i - 1]) {
      arr[i] = Math.floor(Math.random() * (max - min) + min);
    }
  }
}
function createBars(arrayDiv, n) {
  var barsContainer = document.querySelector(".bars-container");

  if (n < 30) {
    for (var i = 0; i < arraySize; i++) {
      arrayDiv[i] = document.createElement("div");
      arrayDiv[i].id = "block" + i;
      arrayDiv[i].className = "bars";
      arrayDiv[i].style.backgroundColor = "green";
      var h = arr[i] * 5;
      arrayDiv[i].style.height = h + "px";
      arrayDiv[i].style.width = "20px";
      arrayDiv[i].style.marginRight = "5px";
      barsContainer.appendChild(arrayDiv[i]);
    }
  } else {
    arrayDiv = document.querySelectorAll(".bars");
    for (var i = 0; i < arrayDiv.length; i++) {
      var h = arr[i] * 5;
      arrayDiv[i].style.height = h + "px";
    }
  }
}
