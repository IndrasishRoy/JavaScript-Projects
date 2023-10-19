 /*In this project I created a Magic Eight Ball using control flow*/
 let userName = '';
 userName = prompt('What is your name?');
 userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
//  let userQuestion = 'do you like to code?';
 let userQuestion = '';
 userQuestion = prompt('What is your question?');
 console.log(userName, 'asked...', userQuestion);
 let randomNumber = Math.floor(Math.random()*8);
 let eightBall = '';
 switch(randomNumber){
   case 1:
   eightBall = 'It is certain';
   break;
   case 2:
   eightBall = 'It is decidedly so';
   break;
   case 3:
   eightBall = 'Reply hazy try again';
   break;
   case 4:
   eightBall = 'Cannot predict now';
   break;
   case 5:
   eightBall = 'Do not count on it';
   break;
   case 6:
   eightBall = 'My sources say no';
   break;
   case 7:
  eightBall = 'Outlook not so good';
   break;
   case 8:
   eightBall = 'Signs point to yes';
   break;
   default:
   console.log('You\'re unfortunate!');
   break;
 }
 console.log('Magic Eight Ball\'s answer', eightBall);