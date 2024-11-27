
function move(n, start, end, temp){
    if(n===1){
        console.log('move ',start,' to', end);
    }
    else {
        move(n-1,start,temp,end);
        console.log('move ',start,'to', end);
        move(n-1,temp,end,start);
    }
}

move(12,'A','C','B');