//Сортировка массива:
var numbers = [12, 3, 7, 9, 10, 5];

for (var i = 0; i <= numbers.length - 2; i++) {
    var minValue = numbers[i];

    for (var j = i + 1; j <= numbers.length - 1; j++) {
        if (numbers[j] < minValue) {
            minValue = numbers[j];
            var swap = numbers[i];
            numbers[i] = minValue;
            numbers[j] = swap;
        }
    }
}
console.log(numbers);
