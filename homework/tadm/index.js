let split = function(number,number2) {
   for (let i = 1; i < 101; i++) {
   
     if ((i % number === 0) && (i % number2 === 0)){
       console.log ('FizzBuzz');
       continue
     }
     if (i % number === 0) {
       console.log ('Fizz');
       continue
   }
     if  (i % number2 === 0) {
           console.log ('Buzz'); 
           continue  
   } 
     else {  
             console.log (i);
       }   
   }
   };
   
   // split(3,5);

   let  isPalindrom = function(any) {
      let oldThing = any;
      let newThing = '';
      let num = 1;
      
      if (typeof oldThing === typeof num){
        oldThing = oldThing.toString();  
      }
      
      for (let i = 1; i <= oldThing.length; i++) {
        newThing += oldThing.charAt(oldThing.length -i)
      }
      
      if (oldThing === newThing){
        console.log(`${oldThing} является палиндромом`);
      }
      else {
        console.log(`${oldThing} не является палиндромом`);
      }
      };
      
      // isPalindrom(7887);
