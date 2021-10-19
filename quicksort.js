var quick=document.getElementById("quick-sort");
quick.addEventListener('click',()=>{
    quickSort(0,arraySize-1);
});
async function partition(left,right,delay2=150)
{
    var pivot=sortedArray[right];
    arrayDiv[right].style.backgroundColor="red";
    await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay2)
       );
    var i=(left-1);

    for(var j=left;j<=right-1;j++)
    {
        arrayDiv[j].style.backgroundColor="red";
        await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, delay2)
           );
        if(sortedArray[j]<=pivot)
        {
            i++;
            swap(sortedArray,i,j);
            var temp2=arrayDiv[i].style.height;
            arrayDiv[i].style.height=arrayDiv[j].style.height;
            arrayDiv[j].style.height=temp2;
            arrayDiv[i].style.backgroundColor="blue";
        }
        if(i!=j){
        arrayDiv[j].style.backgroundColor="yellow";
        await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, delay2)
           );}
    }
    if(i+1!=right)
    {
        swap(sortedArray,i+1,right);
    var temph=arrayDiv[i+1].style.height;
    arrayDiv[i+1].style.height=arrayDiv[right].style.height;
    arrayDiv[right].style.height=temph;
    
    }
    
   for(var k=left;k<=i;k++)
     arrayDiv[k].style.background="yellow";
     await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );
   arrayDiv[right].style.background="yellow";
   arrayDiv[i+1].style.background="green";
    return i+1;
}
async function quickSort(left,right){
    if(left<=right)
    {
        var pivot=await partition(left,right);
    quickSort(left,pivot-1);
    quickSort(pivot+1,right);
    }
    
}