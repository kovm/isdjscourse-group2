function num() {
    for (let i = 1; i <=100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
num();


function checkPal(val) {
    val = String(val);
    val = val.toLowerCase();
    for (let i = 0; i < val.length; i++) {
        if (val[i] !== val[val.length - 1 - i]) {
            return false;
        }
    }
    return true;
}   

checkPal(1221);
checkPal(1234);
checkPal('notPalindrom');
checkPal('Level');