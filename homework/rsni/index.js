function num () {
  for (let i = 1; i <= 100; i ++) {
    if ( i % 3 === 0 && i % 5 === 0) {
      console.log ('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log ('Fizz');
      } else if (i % 5 === 0) {
          console.log ('Buzz');
        } else {
          console.log(i)
        }
      }
    }
num ();

function isPalindrom (val) {
  val = String(val);
  val = val.toLowerCase();
  for (let i = 0; i < val.length / 2; i++) {
    if (val[i] !== val[val.length -1 -i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrom(2442));
console.log(isPalindrom(2446));
console.log(isPalindrom('saadds'));
console.log(isPalindrom('saaas'));