const arr = ['A', 'B', 'B', 'D' ];

function permute(arr, start, end, exist) {
    if(start === end && !exist.includes(arr.join())) {
        console.log(arr.join());
        exist.push(arr.join());
    }

    for(var i=start; i<arr.length; i++){
        [arr[start],arr[i]] = [arr[i], arr[start]];
        permute(arr, start+1, end, exist);
        [arr[i], arr[start]] = [arr[start],arr[i]];
    }
}

permute(arr,0,arr.length, []);