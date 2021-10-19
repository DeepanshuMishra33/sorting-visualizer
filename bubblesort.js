
//BUBBLE SORT
let sortedArray = arr;
var bubble = document.getElementById("bubble-sort");
bubble.addEventListener("click", (sortedArray) => {
  bubblesort(sortedArray, arraySize);
});
function swap(sortedArray, xp, yp) {
  var temp = sortedArray[xp];
  sortedArray[xp] = sortedArray[yp];
  sortedArray[yp] = temp;
}
async function bubblesort(delay2 = 2000) {
  var i, j;
  for (i = 0; i < arraySize - 1; i++) {
    for (j = 0; j < arraySize - i - 1; j++) {
      arrayDiv[j].style.background = "red";
      arrayDiv[j + 1].style.background = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay2)
      );
      if (sortedArray[j] > sortedArray[j + 1]) {
        swap(sortedArray, j, j + 1);
        var newHeight = arrayDiv[j].style.height;
        arrayDiv[j].style.height = arrayDiv[j + 1].style.height;
        arrayDiv[j + 1].style.height = newHeight;
      }
      arrayDiv[j].style.background = "green";
      arrayDiv[j + 1].style.background = "green";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay2)
      );
    }
    arrayDiv[arraySize - i - 1].style.backgroundColor = "yellow";
  }
  arrayDiv[0].style.backgroundColor = "yellow";
}
