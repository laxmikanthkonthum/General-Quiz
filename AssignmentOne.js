
var  readlineSync = require("readline-sync");
const chalk = require('chalk');
console.log('Welcome to ' + chalk.bold(chalk.redBright("GENERAL" + chalk.cyan(" QUIZ\n") )));
var guestName =  readlineSync.question("Pls enter your Name: ")
console.log ("Hi " + chalk.green.bold(guestName) + "! Thanks for taking out time :-)\n")
 console.log("Lets get started with the QUIZ \n");
 var score = 0;
function quiz(question,answer){
var userAnswer = readlineSync.question(question) 
if(userAnswer.toLowerCase() == answer.toLowerCase()){
  console.log(chalk.green("WOW! Thats right \nScore +1\n"))
  score++;
}else{
  console.log(chalk.redBright("Thats wrong\n" + chalk.cyan("The right answer is " + chalk.green(answer) + '\n')))
}
}
var queArr = [{question: "Which is the longest river in the world? ",answer: "Nile"},{question:"What is the middle name of Mahatma Gandhi? ", answer: "Karamchand"},{question: "The National Stock Exchange of India is located at?", answer: "Mumbai"},{question: "Where is Supreme Court of India?", answer: "Delhi"},{question: "What is finance capital of India?", answer: "Mumbai"}];
for(i=0;i<queArr.length;i++){
  console.log("Here is your question no: " + (i+1))
  quiz(queArr[i].question,queArr[i].answer);
}
console.log(chalk.bgRed("Thank you!! Your Final score is: " + score));
