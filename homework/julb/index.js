function checkNumber () {
   let num = 1;

   while (num <= 100) {
      if (num % 3 === 0 && num % 5 === 0) {
         console.log('FizzBuzz');
      } else if (num % 3 === 0) {
         console.log('Fizz');
      } else if (num % 5 === 0) {
         console.log('Buzz');
      } else {
         console.log(num);
      }

      num++;
   }
}

checkNumber();

function isPalindrom (str) {
   if( str !== null && str !== '' && str !==undefined ) {
      str = str.toString().toLowerCase().trim();

      for (let i = 0; i <= str.length - 1; i++) {
         if ((str[i] !== str[str.length - 1 - i])) {
            return console.log('не палиндромом');
         }
      }
         return console.log('палиндромом');
      }
   }

isPalindrom('лопата');
isPalindrom('потоп');
isPalindrom('23455432');
isPalindrom('12354321');
isPalindrom(' Aa ');
isPalindrom();
isPalindrom(null);