// #region homework1
const arraySparse = [1, 3, 7];
let numCallbackRuns = 0;

console.log('Homework 1:');
arraySparse.forEach(function (element) {
   console.log(element);
   numCallbackRuns++;
});

console.log('numCallbackRuns: ', numCallbackRuns);
// #endregion homework1

// #region homework2
/**
 * Prints numbers from 1 to 100 with following conditions
 * if number is a multiple of three replace with word Fizz
 * if number is a multiple of five replace with word Buzz
 * if number is a multiple to both (three and five) replace with word FizzBuzz
 */
function printNumbers () {
   for (let i = 1; i <= 100; i++) {
      const remOfThree = i % 3;
      const remOfFive = i % 5;
      let result = '';

      if (remOfThree === 0) {
         result = 'Fizz';
      }
      if (remOfFive === 0) {
         result = result + 'Buzz';
      }
      if (remOfThree !== 0 && remOfFive !== 0) {
         result = i;
      }
      console.log(result);
   }
}

/**
 * Checks param is palindrome or not
 * param can be word, phrase, number
 * @param {*} param
 * @returns true if param is palindrome
 *          false if param is not palindrome
 */
function isPalindrome (param) {
   if (!param) {
      return false;
   } else {
      param = param.toUpperCase();
      param = param.replace(/\s/g, '');

      const len = param.length;
      for (let i = 1; i <= len / 2; i++) {
         if (param[i - 1] !== param[len - i]) {
            return false;
         }
      }
      return true;
   }
}

console.log('Homework 2. The method printNumbers():');
printNumbers();

console.log('Homework 2. The method isPalindrome():');

console.log('refer: ' + isPalindrome('refer'));
console.log('javaScript: ' + isPalindrome('javaScript'));

console.log('Was it a car or a cat I saw: ' + isPalindrome('Was it a car or a cat I saw'));
console.log('Good day: ' + isPalindrome('Good day'));

console.log('1234554321: ' + isPalindrome('1234554321'));
console.log('12345: ' + isPalindrome('12345'));
console.log('1: ' + isPalindrome('1'));
// #endregion homework2
