
function subset(index, set, elements) {
    if(elements.length === index){
        console.log(set);
    }
    else {
        subset(index+1,[...set], elements);
        subset(index+1, [...set,elements[index]],elements);
    }
}


subset(0, [],['a', 'b', 'c', 'd', 'e']);
// const arr = ['a', 'b', 'c'];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);