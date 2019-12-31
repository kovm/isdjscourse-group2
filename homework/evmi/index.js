// 1
const palindrom = prompt('Input a word:');

function isPalindrom (palindrom) {
   palindrom = palindrom.toLowerCase();
   const len = palindrom.length - 1;
   for (let i = 0; i < len / 2; i++) {
      if (palindrom[i] !== palindrom[len - i]) {
         return false;
      }
   }
   return true;
}
console.log(isPalindrom(palindrom));

// 2
function num () {
   for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
         document.write('FizzBuzz', '<br />');
      } else if (i % 3 === 0) {
         document.write('Fizz', '<br />');
      } else if (i % 5 === 0) {
         document.write('Buzz', '<br />');
      } else {
         document.write(i + '<br />', ' ');
      }
   }
}

num();
