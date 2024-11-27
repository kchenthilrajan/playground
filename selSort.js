

function sort(arr){
    let pos = 0;
    for(pos=0;pos<arr.length;pos++){
        let minIndex = pos;
        let index = pos;
        for(index=pos;index<arr.length;index++) {
            if(arr[index]<arr[minIndex]){
                minIndex = index;
            }
        }
        [arr[pos],arr[minIndex]] = [arr[minIndex], arr[pos]];
    }
    return arr;
}

console.log(sort([4,2,8,1,9,6,3,9,100,23,1,6]));