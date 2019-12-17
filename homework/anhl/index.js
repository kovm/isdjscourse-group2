function num () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}
num()

let word = prompt('Give me your word')
word = word.toLowerCase()
let result = ''

function isPalindrome (word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[word.length - 1 - i]) {
      result = 'true'
    } else {
      result = 'false'
    }
  }
  console.log(result)
}
isPalindrome(word)