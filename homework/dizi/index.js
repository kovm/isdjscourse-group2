'use strict';

// FizzBuzz
function getNumbers () {
   for (let i = 0; i <= 100; i++) {
      let a = i;
      if (!(a % 3) && !(a % 5)) {
         a = 'FizzBuzz';
      } else if (!(a % 3)) {
         a = 'Fizz';
      } else if (!(a % 5)) {
         a = 'Buzz';
      }
      console.log(a);
   }
}

getNumbers();

// Is it palindrome?
function palindromeCheck (itemToCheck) {
   const stringToCheck = String(itemToCheck).toLowerCase();
   for (let i = 0; i < stringToCheck.length; i++) {
      if (stringToCheck[i] !== stringToCheck[(stringToCheck.length - 1) - i]) {
         return console.log('It is NOT a palindrome');
      }
   }
   return console.log('It is a palindrome');
}

palindromeCheck(1221);
