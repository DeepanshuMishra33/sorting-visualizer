// MERGE SORT
var merge = document.getElementById("merge-sort");
merge.addEventListener("click", (sortedArray) => {
  mergeSort(0, arraySize - 1);
});



async function merge_arr(low,mid,high,delay2=300){
    var i = low,j = mid + 1,temp,tempi,tempj;

  while (i <= mid && j <= high) {
    tempi = i; tempj = j;
    arrayDiv[tempi].style.background = "red";
    arrayDiv[tempj].style.background = "red";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay2)
    );

    if (sortedArray[i] > sortedArray[j]) {
      temp = sortedArray[j];
      temp_arrayDiv = arrayDiv[j];
      const transform2 = arrayDiv[j].style.height;
      for (var k = j; k > i; k--) {
        arrayDiv[k].style.height=arrayDiv[k-1].style.height;
        sortedArray[k] = sortedArray[k - 1];
        
      }
      arrayDiv[i].style.height = transform2;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay2)
      );

      sortedArray[i] = temp;
      j++;
      mid++;
    }
    arrayDiv[tempj].style.background = "yellow";
    arrayDiv[tempi].style.background = "yellow";
    if (low == 0 && high == arraySize - 1)
      arrayDiv[i].style.background = "green";
    i++;
  }
  if (low == 0 && high == arraySize - 1) {
    for (var k = 0; k <= arraySize - 1; k++)
      arrayDiv[k].style.background = "green";
  }
}

async function mergeSort(low, high) {
  if (low < high) {
    var mid = Math.floor(low + (high - low) / 2);
    //  console.log(mid);
    await mergeSort(low, mid);
    await mergeSort(mid + 1, high);
    await merge_arr(low, mid, high);
  }
}

