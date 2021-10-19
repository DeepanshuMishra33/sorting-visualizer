var selection = document.getElementById("selection-sort");
selection.addEventListener("click", (sortedArray) => {
  selectionSort(sortedArray, arraySize);
});
async function selectionSort() {
  for (var i = 0; i < arraySize - 1; i++) {
    var min_idx = i;
    arrayDiv[i].style.background = "red";
    arrayDiv[min_idx].style.background = "red";
    for (var j = i + 1; j < arraySize; j++) {
      arrayDiv[j].style.background = "blue";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
      //  arrayDiv[j].style.background="yellow";
      // arrayDiv[min_idx].style.background="yellow";
      if (sortedArray[j] < sortedArray[min_idx]) {
        if (min_idx != i) arrayDiv[min_idx].style.background = "yellow";
        min_idx = j;
        arrayDiv[min_idx].style.background = "red";
      }
      if (j != min_idx) arrayDiv[j].style.background = "yellow";
    }
    arrayDiv[min_idx].style.background = "red";

    // arrayDiv[i].style.background="green";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 20)
    );
    swap(sortedArray, min_idx, i);
    arrayDiv[min_idx].style.background = "yellow";
    arrayDiv[i].style.background = "green";

    //swaping divs
    var newHeight = arrayDiv[i].style.height;
    arrayDiv[i].style.height = arrayDiv[min_idx].style.height;
    arrayDiv[min_idx].style.height = newHeight;
  }
  arrayDiv[arraySize - 1].style.background = "green";
}
