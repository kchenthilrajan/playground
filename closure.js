function counter() {
    let counter = 0;

    return ()=> {
        return counter++;
    }
}
const increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

[1,2,3].forEach(()=>{console.log(increment())});
[1,2,3].forEach(console.log);
[{
    name: 'a',
    age: 20
}].forEach(console.log);