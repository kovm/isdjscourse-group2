const FizzBuzz = function (number, number2) {
   for (let i = 1; i < 101; i++) {
      if ((i % number === 0) && (i % number2 === 0)) {
         console.log('FizzBuzz');
         continue;
      }
      if (i % number === 0) {
         console.log('Fizz');
         continue;
      }
      if (i % number2 === 0) {
         console.log('Buzz');
         continue;
      } else {
         console.log(i);
      }
   }
};

FizzBuzz(3, 5);

const isPalindrom = function (any) {
   if (typeof any !== 'string' && typeof any !== 'number') {
      console.log(`${any} - is an exception`);
      return false;
   }
   const oldThing = any.toString().toLowerCase();
   let newThing = '';
   for (let i = 1; i <= oldThing.length; i++) {
      newThing += oldThing.charAt(oldThing.length - i);
   }
   if (oldThing === newThing) {
      console.log(`${any} - is palindrom`);
   } else {
      console.log(`${any} - is not palindrom`);
   }
};

isPalindrom('Потоп');
isPalindrom(345543);
isPalindrom('Word palindrom');
isPalindrom();
isPalindrom(null);
isPalindrom([1, 2, 1]);
isPalindrom({});
