function oneToHundred () {
   for (let i = 1; i < 101; i++) {
      if ((i % 3 === 0) && !(i % 5 === 0)) {
         console.log('Fizz');
      } else if ((i % 5 === 0) && !(i % 3 === 0)) {
         console.log('Buzz');
      } else if ((i % 5 === 0) && (i % 3 === 0)) {
         console.log('FizzBuzz');
      } else {
         console.log(i);
      }
   }
}
function isPalindrome (str) {
   if ((typeof str === 'object') || (typeof str === null) || (typeof str === 'undefined')) {
      return false;
   }
   if (typeof str === 'number') {
      str = String(str);
   }
   const strLen = str.length;
   let result = '';
   for (let i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) {
         result = true;
      } else {
         result = false;
         return result;
      }
   }
   return result;
}
