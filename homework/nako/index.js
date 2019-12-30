
function arrayToList (arr) {
    let next = prepend (arr[arr.length-1], null);
    for (let i=arr.length-2; i>-1; i--){
        next = prepend(arr[i], next )
    }
    return next;
}

function prepend (value, next) {
    return {value: value, rest: next}
}

function listToArray (list){
    let arr=[];
    arr.push(list.value);
    do{
        list=list.rest;
        arr.push(list.value);
    }
    while(list.rest!==null)
        ;
    return arr;
}

function nth (list, position){
    let counter=0;
    while(counter!==position && list.rest!==null){
        list=list.rest;
        counter++;
    };
    if (counter===position) return list.value;
    else return undefined;
}

console.log(arrayToList([10,20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20