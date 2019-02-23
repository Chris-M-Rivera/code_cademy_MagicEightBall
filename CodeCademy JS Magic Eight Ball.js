// Magic Eight Ball

//userName is user defined value
let userName = 'DthSndwch';

//user entered question
let userQuestion = 'why tho?'

//welcomes the user.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//statement of the user's question
if(userName){
    console.log(`${userName}'s question is : ${userQuestion}`)
}else{console.log(`Your question is: ${userQuestion}`)
}

//generating a random number between 0 and 7
let randomNumber = Math.floor(Math.random()*8)

//just checking the random number
console.log(randomNumber)

//creating eightBallElseIf variable and
//assigning randomNumber values to eightball's output using 'else if'
let eightBallElseIf = ''

if(randomNumber === 0){
    eightBallElseIf = 'It is Certiain'
  }else if(randomNumber === 1){
    eightBallElseIf = 'It is decidedly so'
  }else if(randomNumber === 2){
    eightBallElseIf = 'Reply hazy try again'
  }else if(randomNumber === 3){
    eightBallElseIf = 'Cannot predict now'
  }else if(randomNumber === 4){
    eightBallElseIf = 'Do not count on it'
  }else if(randomNumber === 5){
    eightBallElseIf = 'My sources say \'no\''
  }else if(randomNumber === 6){
    eightBallElseIf = 'Outlook not so good'
  }else if(randomNumber === 7){
    eightBallElseIf = 'Signs point to yes'
  }else{
    eightBallElseIf = 'You broke the Eight BAll!'
  }

console.log(eightBallElseIf)

//creating eightBallSwitch variable and
//assigning randomNumber values to eightball's output using 'switch'
let eightBallSwitch = randomNumber

  switch(eightBallSwitch) {
    case 0 :
        console.log('It is Certiain');
        break;
    case 1 :
        console.log('It is decidedly so');
        break;
    case 2 :
        console.log('Reply hazy try again');
        break;
    case 3 :
        console.log('Cannot predict now');
        break;
    case 4 :
        console.log('Do not count on it');
        break;
    case 5 :
        console.log('My sources say \'no\'');
        break;
    case 6 :
        console.log('Outlook not so good');
        break;
    case 7 :
        console.log('Signs point to yes');
        break;
    default :
        console.log('You broke the Eight Ball!');
        break;
  }