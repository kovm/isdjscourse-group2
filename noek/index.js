function code(){
let i = 1;
let N = 100;

for (i; i<=N; i++){

    if (i % 3 === 0 && i % 5 === 0){

        console.log('FizzBuzz');

    } else if (i % 5 === 0){

        console.log('Buzz');

    }else if(i % 3 === 0){

        console.log('Fizz');

    } else console.log(i);
}
return;
}