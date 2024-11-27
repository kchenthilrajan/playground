
function minmax(array,{min, max}, index) {
    if(array.length-1 === index) {
        return {min: min, max: max};
    }
    return minmax(
        array,
        {
            min: Math.min(array[index],min),
            max: Math.max(array[index],max),
        },
        index+1);
}
const arr = [ 12, 1234, 45, 67, 1 ]
const result = minmax(arr,{min:arr[0],max:arr[0]}, 0);
console.log(result);
