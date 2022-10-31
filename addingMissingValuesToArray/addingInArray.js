var arr=[11,14,17,19];


for (let index = 0; index < arr.length; index++)
{
    if(arr[index]<arr[index+1] && arr[index]!=arr[index+1]-1)
    {
        arr.splice(index+1,0,arr[index]+1);
    }
}
console.table(arr);

