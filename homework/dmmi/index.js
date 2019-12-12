function fizzBuzz (size) {
   for (let i = 1; i <= size; i++) {
      const output = (i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '');
      console.log(output === '' ? i : output);
   }
}

fizzBuzz(100);

function isPalindrome (input) {
   if (typeof input !== 'string' && typeof input !== 'number') {
      return false;
   }      
   const inputArray = input.toString().toLowerCase().split('');
   for (let i = 0; i <= inputArray.length / 2 - 1; i++) {
      if (inputArray[i] !== inputArray[inputArray.length - 1 - i]) {
         return false;
      }
   }
   return true;
}

console.log(`sPalindrome for null === ${isPalindrome(null)}`);
console.log(`isPalindrome for Потоп === ${isPalindrome('Потоп')}`);
console.log(`isPalindrome for потоп === ${isPalindrome('потоп')}`);
console.log(`isPalindrome for кот === ${isPalindrome('кот')}`);
console.log(`isPalindrome for 12314 === ${isPalindrome(12314)}`);
console.log(`isPalindrome for 345543 === ${isPalindrome(345543)}`);

console.log(`isPalindrome for 3 === ${isPalindrome(3)}`);
console.log(`isPalindrome for 33 === ${isPalindrome(33)}`);
console.log(`isPalindrome for 353 === ${isPalindrome(353)}`);
console.log(`isPalindrome for 34 === ${isPalindrome(34)}`);

console.log(`isPalindrome for {toString: () => 'kek'} === ${isPalindrome({toString: () => 'kek'})}`);
console.log(`isPalindrome for () === ${isPalindrome()}`)
console.log(`isPalindrome for [1,2,3,2,1] === ${isPalindrome([1,2,3,2,1])}`);

