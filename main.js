// Function that validates question
// function validateQuestion() {
//   const validYesNoQuestions = [
//     'am',
//     'are',
//     'aren\'t',
//     'can',
//     'can\'t',
//     'could',
//     'couldn\'t',
//     'did',
//     'didn\'t',
//     'do',
//     'does',
//     'doesn\'t',
//     'don\'t',
//     'if', // added for a 'if..., will...?' question
//     'is',
//     'isn\'t',
//     'had',
//     'hadn\'t',
//     'has',
//     'hasn\'t',
//     'have',
//     'haven\'t',
//     'may',
//     'might',
//     'must',
//     'ought',
//     'should',
//     'shouldn\'t',
//     'was',
//     'were',
//     'weren\'t',
//     'will',
//     'won\'t',
//     'would',
//     'wouldn\'t'
//   ]

//   // searches inside of validYesNoQuestions
//   const question = validYesNoQuestions.some();
//   const i;

//   for (i = 0; i < question; i++) {}

//   // if else 
//   if (question.toLowerCase() == validYesNoQuestions.toLowerCase()) {
//     clickSubmitQuestion();
//   } else {
//     alert('Please ask the Magic Eight Ball a valid Yes or No question');
//   }

//   return false;
// }


// Function that creates random answer
function clickSubmitQuestion() {
  const answers = [
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
  const randomAnswerID = [Math.floor(Math.random() * answers.length)];
  const randomAnswerObj = answers[randomAnswerID];
  const randomAnswer = randomAnswerObj.answer;
  console.log(randomAnswerObj);

  // Creates the p for the answer
  const createAnswer = document.createElement("p");
  createAnswer.setAttribute("id", "answer");
  createAnswer.innerHTML = `${randomAnswer}`;
  console.log("p with random answer");

  // Creates div for gradient background
  const addBackground = document.createElement("div");
  addBackground.setAttribute("id", "answer-background");

  // Creates div for die
  const addDie = document.createElement("div");
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
  const answerWrapper = document.getElementById("answer-wrapper");
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
  const btnText = document.getElementById('submitQuestion');
  if (btnText.value == 'Ask Another Question') {
    document.getElementById('submitQuestion').setAttribute('onclick', 'askQuestion();');
    btnText.value = 'Submit Your Question';
    btnText.innerHTML = 'Submit Your Question';
  }
};


function askQuestion() {
  // changes attribute function to clickResetButton() and updates button value and html
  const btnText = document.getElementById('submitQuestion');
  if (btnText.value == 'Submit Your Question') {
    document.getElementById('submitQuestion').setAttribute('onclick', 'clickResetButton();');
    btnText.value = 'Ask Another Question';
    btnText.innerHTML = 'Ask Another Question';
  }
};
