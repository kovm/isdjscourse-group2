function FizzBuzz (century) {
   for (let i = 0; i <= century; i++) {
      const num = (i % 3 === "Fizz") + (i % 5 === "Buzz");
      console.log(num == "");
   }
}

FizzBuzz(100);