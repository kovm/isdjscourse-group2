let a = 1;
while (a <= 100) {
  if (!(a % 3) && !(a % 5)) {
    console.log('FizzBuzz')
  } else if (!(a % 5 )) {
    console.log('Buzz')
  } else if (!(a % 3)) {
    console.log('Fizz')
  } else {
    console.log(a)
  }
  a++
}