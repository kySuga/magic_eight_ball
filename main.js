// Function that validates question
// function validateQuestion() {
//   var validYesNoQuestions = [
//     'am',
//     'are',
//     'aren\'t',
//     'can\'t',
//     'do',
//     'does',
//     'don\'t',
//     'is',
//     'should',
//     'isn\'t',
//     'will',
//     'have',
//     'could',
//     'had',
//     'did',
//     'were',
//     'was',
//     'would',
//     'can',
//     'has',
//     'shouldn\'t',
//     'wouldn\'t',
//     'couldn\'t',
//     'hadn\'t',
//     'didn\'t',
//     'doesn\'t',
//     'hasn\'t',
//     'haven\'t',
//     'weren\'t',
//     'may',
//     'ought',
//     'won\'t',
//   ]

  // searches inside of validYesNoQuestions
  // var question = 

  // if else 
  // if (question.toLowerCase() == validYesNoQuestions.toLowerCase()) {
  //   clickSubmitQuestion();
  // } else {
  //   alert('Please ask the Magic Eight Ball a valid Yes or No question');
  // }

  // return false;
// }


// Function that creates random answer
function clickSubmitQuestion() {
  var answers = [
    { 'answer': 'It is<br>certain'}, 
    { 'answer': 'Without<br>a<br>doubt'}, 
    { 'answer': 'You may<br>rely on<br>it'}, 
    { 'answer': 'As I see<br>it<br>yes'}, 
    { 'answer': 'Most<br>likely'}, 
    { 'answer': 'Outlook<br>good'}, 
    { 'answer': 'Yes'}, 
    { 'answer': 'Signs<br>point to<br>yes'}, 
    { 'answer': 'Reply<br>hazy,<br>try again', 'direction': 'dieUp'},  //dieUp
    { 'answer': 'Ask again<br>later'}, 
    { 'answer': 'Better<br>not tell<br>you<br>now', 'direction': 'dieUp'},  //dieUp
    { 'answer': 'Cannot<br>predict<br>now'}, 
    { 'answer': 'Concentrate<br>and ask<br>again'}, 
    { 'answer': 'Don\'t<br>count<br>on<br>it'}, 
    { 'answer': 'My<br>reply<br>is<br>no'}, 
    { 'answer': 'My<br>sources<br>say<br>no'}, 
    { 'answer': 'Outlook<br>not so<br>good'}, 
    { 'answer': 'It is<br>decidely<br>so'}, 
    { 'answer': 'Yes<br>definitely', 'direction': 'dieUp'},  //dieUp 
    { 'answer': 'Very<br>doubtful', 'direction': 'dieUp'} //dieUp
  ]

  // randomAnswer takes answer and returns a random answer
  var randomAnswerID = [Math.floor(Math.random() * answers.length)];
  var randomAnswerObj = answers[randomAnswerID];
  var randomAnswer = randomAnswerObj.answer;
  console.log(randomAnswerObj);

  // Creates the p for the answer
  var createAnswer = document.createElement("p");
  createAnswer.setAttribute("id", "answer");
  createAnswer.innerHTML = `${randomAnswer}`;
  console.log("p with random answer");

  // Creates div for gradient background
  var addBackground = document.createElement("div");
  addBackground.setAttribute("id", "answer-background");

  // Creates div for die
  var addDie = document.createElement("div");
  addDie.setAttribute("id", "get-your-answer");

  // Determines orientation of die and answer
  if (randomAnswerObj.direction != null && randomAnswerObj.direction == 'dieUp') {
    addDie.setAttribute("class", "die-up");
    console.log("addDieUP");
  } else {
    addDie.setAttribute("class", "die-down");
    console.log("addDieDown");
  }

  // Appends p for answer to die div
  addDie.appendChild(createAnswer);

  // Adds die div into gradient background div
  addBackground.appendChild(addDie);
  console.log("Appends addDie to addBackground");

  // Adds die with answer and background to magic eight ball page
  var answerWrapper = document.getElementById("answer-wrapper");
  answerWrapper.innerHTML = addBackground.outerHTML;

  console.log("addBackground");

  return false;
};


function clickResetButton() {
  // removes answer from DOM when reset button is clicked
  const parentElem = document.getElementById('answer-wrapper');
  const childElem = document.getElementById('answer-background');
  parentElem.removeChild(childElem);

  // removes question from form input
  document.getElementById('form-for-question').reset();

  // changes attribute function back to askQuestion() and updates button value and html
  var btnText = document.getElementById('submitQuestion');
  if (btnText.value == 'Ask Another Question') {
    document.getElementById('submitQuestion').setAttribute('onclick', 'askQuestion();');
    btnText.value = 'Submit Your Question';
    btnText.innerHTML = 'Submit Your Question';
  }
};


function askQuestion() {
  // changes attribute function to clickResetButton() and updates button value and html
  var btnText = document.getElementById('submitQuestion');
  if (btnText.value == 'Submit Your Question') {
    document.getElementById('submitQuestion').setAttribute('onclick', 'clickResetButton();');
    btnText.value = 'Ask Another Question';
    btnText.innerHTML = 'Ask Another Question';
  }
};
