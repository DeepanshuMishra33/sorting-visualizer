//insertion sort
var insertion = document.getElementById("insertion-sort");
insertion.addEventListener("click", () => {
  insertionSort();
});
async function insertionSort(delay2 = 100) {
  let i, key, j;
  for (i = 1; i < arraySize; i++) {
    key = arr[i];
    arrayDiv[i].style.backgroundColor = "blue";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay2)
    );

    j = i - 1;
    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && sortedArray[j] > key) {
      arrayDiv[j].style.backgroundColor = "red";
      if (j + 1 != i) arrayDiv[j + 1].style.background = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay2)
      );
      //swap
      var x = arrayDiv[j].style.height;
      arrayDiv[j].style.height = arrayDiv[j + 1].style.height;
      arrayDiv[j + 1].style.height = x;
      // arrayDiv=document.querySelectorall(".bars");

      sortedArray[j + 1] = sortedArray[j];
      arrayDiv[j].style.background = "yellow";
      if (j + 1 != i) arrayDiv[j + 1].style.background = "yellow";
      j--;
    }
    sortedArray[j + 1] = key;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay2)
    );
  }
  var inc = 0.1;
  for (var k = arraySize - 1; k >= 0; k--) {
    arrayDiv[k].style.background = "green";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, (delay2 += inc))
    );
  }
}