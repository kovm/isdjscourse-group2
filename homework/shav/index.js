function standartExercise () {
   for (let i = 1; i <= 100; i++) {
      switch (true) {
      case i % 3 === 0 && i % 5 === 0:
         console.log('FizzBuzz');
         break;
      case i % 3 === 0:
         console.log('Fizz');
         break;

      case i % 5 === 0:
         console.log('Buzz');
         break;

      default:
         console.log(i);
      }
   }
}

function isPalindrome (kek) {
   kek = String(kek);
   kek = kek.toLowerCase();
   let j = kek.length - 1;

   for (let i = 0; i < kek.length; i++) {
      if (i > 0) {
         j = j - 1;
      }
      if (kek[i] !== kek[j]) {
         return console.log('Это не палиндром');
      }
      if (i === kek.length - 1) {
         return console.log('Это палиндром');
      }
   }
}

standartExercise('');
isPalindrome('');
