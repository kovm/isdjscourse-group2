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
   if ((typeof str !== 'string') && (typeof str !== 'number')) {
      return false;
   }
   str += '';
   for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() !== str[str.length - (i + 1)].toLowerCase()) {
         return false;
      }
   }
   return true;
};

isPalindrome('tenet');
