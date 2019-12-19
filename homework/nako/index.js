function fizzBuzz () {
   for (let i = 1; i <= 100; i++) {
      if ((i % 3 === 0 && i % 5 === 0)) {
         console.log('FizzBuzz');
      } else if (i % 5 === 0) {
         console.log('Buzz');
      } else if (i % 3 === 0) {
         console.log('Fizz');
      } else {
         console.log(i);
      }
   }
};

fizzBuzz();

function isPalindrome (str) {
   if (typeof str !== 'object') {
      str += '';
   } else {
      return 'Only string or number can be a palindrome';
   }
   let palindrome;
   for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === str[str.length - (i + 1)].toLowerCase()) {
         palindrome = true;
      } else {
         palindrome = false;
         return palindrome;
      }
   }
   return palindrome;
};

isPalindrome('tenet');
