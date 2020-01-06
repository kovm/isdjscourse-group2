var numbers = [3, -6, 9, 10, 0, 8, 2, -18, 15];
console.log(numbers);

selectionSort(numbers);

console.log(numbers);

function selectionSort(someArray) {
    for(var i = 0; i < numbers.length; i++) {
        minIndex = i;
        for(var j = i + 1; j < numbers.length; j++) {
            if(numbers[minIndex] > numbers[j])
                minIndex = j;
        }
        if(minIndex !== i)
            [numbers[minIndex], numbers[i]] = [numbers[i], numbers[minIndex]];
    }
}