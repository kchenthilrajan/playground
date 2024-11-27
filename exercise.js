const result = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'c', 'd'].reduce((acc, current) => {
    if(acc[current]){
        acc[current] = acc[current]+1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});


const r1 = Object.keys(result).reduce((acc, current) => {
    acc.push({key: current, occurence: result[current]});
    return acc;
}, []);

const sorted = [...r1].sort((a,b) => {
    if(a.occurence === b.occurence) {
        return 0;
    }
    else if(a.occurence < b.occurence) {
        return 1;
    } else {
        return -1;
    }
});

console.log(result, r1, sorted[0].key);
