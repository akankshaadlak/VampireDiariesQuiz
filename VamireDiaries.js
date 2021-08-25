var readlineSync = require('readline-sync');
var userName = readlineSync.question("May I know your name?\n");
console.log("Welcome " + userName + ". Let's play Vampire Diaries quizz.");

var highScore = [
  {
    name: "Akanksha",
    score: 5
  },
  {
    name: "Divya",
    score: 4
  }
]
var questionAnswer = [
 {
   que: "In what town does the show primarily take place?\n",
   ans:"Mystic Falls"
 },
 {
   que: "How many seasons was the show on tv?\n",
   ans: "8"
 },
 {
   que: "What is the name Stefan's friend, who appears in season one and is promptly killed?\n",
   ans: "Lexi"
 },
 {
   que: "Tyler is a hybrid - a vampire and what?\n",
   ans: "Werewolf"
 },
 {
   que: "Who saves Elena from the car accident that killed her parents?\n",
   ans: "Stefan"
 }
]
var score = 0;
function userResponse(questions,answers)
{
  var userAnswer = readlineSync.question(questions);
  if(userAnswer.toUpperCase() === answers.toUpperCase())
  {
    console.log("You are right.");
    score += 1;
  }
  else
  {
    console.log("You are wrong.");
  }
  console.log("Your score: " + score);
  console.log("________________________");
}

for(i=0;i<questionAnswer.length;i++)
{
 var currentQuestion = questionAnswer[i]; 
 userResponse(currentQuestion.que,currentQuestion.ans)
}

console.log("Your final score : "+score);

if(score == highScore[0].score)
{
  console.log("Yay! You have beaten the high scorer. \nPlease send us screenshot to update our database.\nThank You")
}
else if(score == highScore[1].score)
{
  console.log("Yay! You have beaten the second high scorer. \nPlease send us screenshot to update our database.\nThank You")
}
else
{
  console.log("Thank You for taking this quiz.")
}