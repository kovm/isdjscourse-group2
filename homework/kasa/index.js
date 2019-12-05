let counter = 0;
let guessNumber = (start, end, x) => {

    // Base condition
    if (start > end) return console.log('Oops! Something is going wrong');

    //Check greetings
    if (counter === 0) console.log('Hi! I bet, I could guess your number. Choose any number from ' + start + ' to ' + end);
        
    // Find the middle index
    let supposedNumber = Math.floor((start + end)/2);

    //Compare supposedNumber with given number
    if (supposedNumber === x) return console.log('Your number is ' + supposedNumber + '\n I have guessed your number in ' + counter + ' turns!');

    //Increment counter
    counter += 1;

    //If supposedNumber is greater than x
    if (supposedNumber > x){
        console.log('Your number is ' + supposedNumber + '\n No! Number is less than ' + supposedNumber);
        return guessNumber(start, supposedNumber-1, x);
    } else {
        //If supposedNumber is less than x
        console.log('Your number is ' + supposedNumber + '\n No! Number is greater than ' + supposedNumber);
        return guessNumber(supposedNumber + 1, end, x);
    }

}

guessNumber(0, 100, 10);