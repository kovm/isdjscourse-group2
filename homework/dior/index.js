for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
   } else if (i % 3 === 0) {
      console.log('fizz');
   } else if (i % 5 === 0) {
      console.log('buzz');
   } else {
      console.log(i);
   }
   console.log(isPalindrom(i));
}
function isPalindrom (string) {
   string = string + '';
   const strLen = string.length;
   for (let i = 0; i < strLen; i++) {
      if (string[i] === string[strLen - 1 - i]) {
      } else {
         return false;
      }
   }
   return true;
}
