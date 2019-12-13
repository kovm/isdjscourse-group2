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
fizzBuzz();

function isPalindrome (str) {
   str = String(str).toLowerCase();

   let reversed = '';

   for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
   }

   return str === reversed;
}

console.log(isPalindrome('civic')); // true
console.log(isPalindrome('deified')); // true
console.log(isPalindrome('Hannah')); // true
console.log(isPalindrome('definetely not a palindrome')); // false
console.log(isPalindrome(12314)); // false
console.log(isPalindrome(345543)); // true
