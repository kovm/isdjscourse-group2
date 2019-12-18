function fizz(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0) {
            console.log(i + 'Fizz' + '\n');
        } else if (i % 5 === 0) {
            console.log(i + 'Buzz' + '\n');
        }
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(i + 'FizzBuzz' + '\n');
        }
    }
}

function pali(text) {
    let arr = text.toString().toLowerCase().split('');
    let res;
    for (var i = 0; i < arr.length / 2 - 1; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            res = 'no';
        } else {
            res = 'yes';
        }
    }
    console.log(res);
}
fizz(100);
pali('потовп');
pali('Потоп');
pali('123321');
pali('1233212');