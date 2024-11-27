/*
    find possible directions()
    diections =[];
    foreach direction{}
    move left, right, up, down
    [
        ['x','O','O','O','x','O','O','O','O','O'],
        ['x','x','x','O','x','O','x','x','x','O'],
        ['x','x','O','O','O','O','O','x','O','O'],
        ['O','O','O','x','x','x','x','O','O','x'],
        ['x','x','O','x','x','x','x','x','O','x'],
        ['O','O','O','O','O','O','x','x','O','O']
    ]
        start = [5,'O']
        End = [5,9]
    moveUntil(curent, end, direction) {
        if(current === end) {
            return true;
        }
        
        cont directions = findPossibleDirections(current);
        if(directions.length === 0) {
            return false;
        }
        for(d=0;d<directions.length,d++) {
            if(moveUntil(nextStep(current, direction), end, directions[d])){
                console.log("Found Path");
                break;
            }
        }
        console.log("Path not found");

    }
    

*/
const sampleSpace =     [
    ['x','O','O','O','x','O','O','O','O','O'],
    ['x','x','x','O','x','O','x','x','x','O'],
    ['x','x','O','O','O','O','O','x','O','O'],
    ['O','O','O','x','x','x','x','O','O','x'],
    ['x','x','O','x','x','x','x','x','O','x'],
    ['S','O','O','O','O','O','x','x','O','O']
];

const sampleSpace1 = [
    ['O','O','x'],
    ['x','O','x'],
    ['x','O','O']
]
const start = [5,0];
const end = [5,9];
// const start = [0, 0];
// const end = [2, 2];

const [rowStart, columnStart] = start;
const [rowEnd, columnEnd] = end;

   function findPossibleDirections(current, sampleSpace, curentDirection) {
        const directions = [];
        const [rowCurrent, columnCurrent] = current;
        if(sampleSpace[rowCurrent]?.[columnCurrent+1]==='O' && curentDirection !== 'Back'){
            directions.push('Front');
        }
        if(sampleSpace[rowCurrent-1]?.[columnCurrent]==='O' &&  curentDirection !== 'Down'){
            directions.push('Up');
        }
        if(sampleSpace[rowCurrent+1]?.[columnCurrent]==='O' && curentDirection !== 'Up'){
            directions.push('Down');
        }
        if(sampleSpace[rowCurrent]?.[columnCurrent-1]==='O' && curentDirection !== 'Front'){
            directions.push('Back');
        }

        return directions;
    }

    function nextStep(current, direction) {
        const [row, column] = current;

        switch(direction){
        case 'Front':
            return [row, column+1];
        case 'Back':
            return [row, column-1];
        case 'Up':
            return [row-1, column];
        case 'Down':
            return [row+1, column];
        }
    }

    // console.log(findPossibleDirections([2,3], sampleSpace, 'Front'));
    // console.log(nextStep(start, 'Front'));

    moveUntil(start, end, 'Front', []);
    function moveUntil(current, end, direction, path) {
        const [r,c] = nextStep(current, direction);
        const [cr, cc] = current;
        const [er, ec] = end;

        // console.log("Current", current, end, ((cr === er) && (cc === ec)));


        if(cr === er && cc === ec){
            console.log("Found Path", path);
            return true;
        }
        
        // if(directions.length === 0) {
        //     console.log('Dead End')
        //     return false;
        // }
        if(r < 0 || r > sampleSpace.length) {
            // console.log(r,sampleSpace.length);
            // console.log('Wall')
            // return false;
        }
        if(c < 0 || c > sampleSpace[0].length) {
            // console.log(c,sampleSpace[0].length);
            // console.log('Wall')
            // return false;
        }
        const directions = findPossibleDirections(current, sampleSpace, direction);
        
        if(directions.length === 0) {
            return false;
        }
        for(let d=0; d<directions.length; d++) {
        // console.log("Direction", directions[d],"Current", current, "Next", nextStep(current, directions[d]), directions);
            if(moveUntil(nextStep(current, directions[d]), end, directions[d], [...path, current])){
                break;
            }
            // console.log('Next',current, directions[d], directions.length);
        }
        // console.log("Exhausted");
        // return false;
    }
    