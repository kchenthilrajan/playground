function counter() {

    let counter = 0;

    return {
        increment: () => {
            counter++;
           return counter;
        },
        decrement: () => {
            counter --;
           return counter;
        },
        reset: () => {
            counter = 0;
            return 'reset';
        }

    }

}

const incDecrement = counter();
console.log(incDecrement.increment());
console.log(incDecrement.increment());
console.log(incDecrement.decrement());
console.log(incDecrement.reset());
console.log(incDecrement.increment());
console.log(incDecrement.increment());