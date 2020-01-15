function fizzBuzz () {
   for (let i = 1; i <= 100; i++) {
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

function isPalindrom (value) {
   if (typeof value === 'number' || typeof value === 'string') {
      const stringValue = value.toString().toLowerCase();
      let valueReversed = '';

      for (let i = stringValue.length - 1; i >= 0; i--) {
         valueReversed += stringValue[i];
      }
      console.log(`StringValue: ${stringValue}\nReversed: ${valueReversed}`);

      return stringValue === valueReversed;
   } else {
      return 'Only numbers and strings available!';
   }
}

// Main
fizzBuzz();
console.log(isPalindrom('kek'));
console.log(isPalindrom(123321));
console.log(isPalindrom('Kek'));
console.log(isPalindrom(true));
