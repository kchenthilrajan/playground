const arr = [6, 7, 0, 4, 2, 0, 5, 1];
let zeroIndex = -1;
let i;
for(i=0;i<arr.length;i++) {
    if(arr[i]===0 && zeroIndex === -1){
        zeroIndex = i;
    }
    if(arr[i] !== 0 && zeroIndex > -1){
        [arr[i], arr[zeroIndex]] = [arr[zeroIndex], arr[i]];
        zeroIndex = i;
    }
}

console.log(arr);