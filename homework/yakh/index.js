function fizzBuzz (data) {
   for (let i = 1; i <= data; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         console.log('FizzBuzz');
         continue;
      }
      if (i % 3 === 0) {
         console.log('Fizz');
         continue;
      }
      if (i % 5 === 0) {
         console.log('Buzz');
         continue;
      }
      console.log(i);
   }
}

fizzBuzz(100);

function isPalindrom (data) {
   if (typeof data === 'string' || typeof data === 'number') {
      var arr = String(data).toLowerCase().split('');
   } else {
      return false;
   }
   const revers = [];
   for (let i = arr.length - 1; i >= 0; i--) {
      revers.push(arr[i]);
   }
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== revers[i]) {
         return false;
      }
   }
   return true;
}

console.log('\nisPalindrom 123123123: ' + isPalindrom(123123123));
console.log('\nisPalindrom 12122121: ' + isPalindrom(12122121));
console.log('\nisPalindrom ПоТоП: ' + isPalindrom('ПоТоП'));
console.log('\nisPalindrom нож: ' + isPalindrom('нож'));
console.log('\nisPalindrom массив [1, 2, 1]: ' + isPalindrom([1, 2, 1]));
