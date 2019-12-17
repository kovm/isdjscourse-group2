for (let number = 1; number <= 100; number++){
switch (true) {
  case number%5===0||number%3===0:
   console.log('FizzBuzz');
   break;
  case number%5===0:
   console.log('Buzz');
   break;
  case number%3===0:
   console.log('Fizz');
   break;
  default:
   console.log(number);
 }
}