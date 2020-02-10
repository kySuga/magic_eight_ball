// ALL JS NEW AND OLD, TO KEEP MAIN.JS "CLEAN" AND IN CASE I WANT TO REFERENCE SOMETHING I'VE TRIED

// var answer = {
//   dieDown: {
//     answerOne: "It is\ncertain",
//     answerThree: "Without\na\ndoubt",
//     answerFive: "You may\nrely on\nit",
//     answerSix: "As I see\nit\nyes",
//     answerSeven: "Most\nlikely",
//     answerEight: "Outlook\ngood",
//     answerNine: "Yes",
//     answerTen: "Signs\npoint to\nyes",
//     answerEleven: "Reply hazy,\ntry\nagain",
//     answerTwelve: "Ask again\nlater",
//     answerThirteen: "Better\nnot tell\nyou\nnow",
//     answerFourteen: "Cannot\npredict\nnow",
//     answerFifteen: "Concentrate\nand ask\nagain",
//     answerSixteen: "Don't\ncount\non\nit",
//     answerSeventeen: "My\nreply\nis\nno",
//     answerEighteen: "My\nsources\nsay\nno",
//     answerNineteen: "Outlook\nnot so\ngood"
//   },
//   dieUp: {
//     answerTwo: "It is\ndecidely\nso",
//     answerFour: "Yes\ndefinitely",
//     answerTwenty: "Very\ndoubtful"
//   }
// }


// Need evenListener on submit button
// Set answer to be random, math.random?
// if dieDown, display none for dieUp div?




// document.getElementById("submitQuestion-btn").addEventListener("click", function() {document.getElementById("answer").innerHTML = "It is\ncertain"});


function removeAnswer() {
  document.getElementsByClassName("eight-ball-img").style.display = "none";
  // document.getElementById("get-your-answer").style.display = "none";
  // document.getElementById("answer").style.display = "none";
  console.log("removeAnswer is firing");

}

// I need a function that listens to a click on the "submit" button, which shows the random answer. Random answer includes gradient background, die, and answer.

// submitQuestionClick removes targeted id
// function submitQuestionClick() {
//   var dieUpAnswer = document.getElementById("answer-background");
//   if (dieUpAnswer.style.display === "none") {
//     dieUpAnswer.style.display = "block";
//   } else {
//     dieUpAnswer.style.display = "none";
//   }
//   console.log("submitQuestion function is firing");
// }

// Playground
// document.getElementById("submitQuestion").addEventListener("click", function() {
//   document.getElementById("answer").innerHTML = "It is\ncertain";
//   console.log("checking to see if playground is firing");

// });

// clickSubmitQuestion is first successful function 11-22-19
// Add clickSubmitQuestion to onclick for button
// Original below
// function clickSubmitQuestion() {
//   var addAnswer = document.getElementById("answer").innerHTML = "It is\ncertain";
//   console.log("clickSubmitQuestion is firing");  
// }

function addEntireAnswer() {

  // creates <div id="answer-background"></div>
  var answerBackground = document.createElement("div");
  answerBackground.id = "answer-background";

  // hoping to add answerBackground after ask-a-question (elementAbove)
  // insertAdjacentHTML does not work
  var elementAbove = document.querySelector(".ask-a-question");
  elementAbove.insertAdjacentHTML("afterend", answerBackground);
  console.log("addEntireAnswer is firing");

}


// v1 - Uncaught TypeError: Cannot set property "innerHTML" of null
function versionOneclickSubmitQuestionv1() {
  // Creates div for gradient background
  var addBackground = document.createElement("div");
  addBackground.setAttribute("id", "answer-background");
  console.log("addBackground");

  // Creates div for die
  var addDie = document.createElement("div");
  addDie.setAttribute("id", "get-your-answer");
  console.log("addDie");

  // Adds die div into gradient background div
  var dieWithBackground = addBackground.appendChild(addDie);
  console.log("Appends addDie to addBackground");



  // Creates p for answer
  var placeAnswer = document.createElement("p");
  placeAnswer.setAttribute("id", "answer");
  console.log("placeAnswer");

  // Adds answer to die
  var addAnswer = document.getElementById("answer").innerHTML = "It is\ncertain";
  console.log("addAnswer");

  // Adds p for answer into div for die on background
  var dieAnswer = addDie.appendChild(addAnswer);
  console.log("Appends addAnswer to addDie");

  // Adds answer to die with background
  dieWithBackground.appendChild(dieAnswer);

  // Adds die with answer and background to magic eight ball page
  var askQuestionSection = document.getElementById("ask-question-section");
  askQuestionSection.parentNode.insertBefore(dieWithBackground, askQuestionSection.nextSibling);

  console.log("clickSubmitQuestion is firing");
}




var answer = {
  '1': 'It is\ncertain',
  '2': 'Without\na\ndoubt',
  '3': 'You may\nrely on\nit',
  '4': 'As I see\nit\nyes',
  '5': 'Most\nlikely',
  '6': 'Outlook\ngood',
  '7': 'Yes',
  '8': 'Signs\npoint to\nyes',
  '9': 'Reply hazy,\ntry\nagain',
  '10': 'Ask again\nlater',
  '11': 'Better\nnot tell\nyou\nnow',
  '12': 'Cannot\npredict\nnow',
  '13': 'Concentrate\nand ask\nagain',
  '14': 'Don\'t\ncount\non\nit',
  '15': 'My\nreply\nis\nno',
  '16': 'My\nsources\nsay\nno',
  '17': 'Outlook\nnot so\ngood'
  // '18': 'It is\ndecidely\nso',
  // '19': 'Yes\ndefinitely',
  // '20': 'Very\ndoubtful'
}

// randomAnswer takes answer and returns a random answer
var randomAnswer = answer[Object.keys(answer)[Math.floor(Math.random() * Object.keys(answer).length)]];
console.log(randomAnswer);


// v2
function clickSubmitQuestion() {
  // Creates the p for the answer
  var createAnswer = document.createElement("p");
  createAnswer.setAttribute("id", "answer");
  console.log("p for answer");

  // Adds answer
  var addAnswer = document.createTextNode(`${randomAnswer}`);
  // var addAnswer = document.createTextNode("It is\ncertain");
  console.log("adds answer");

  // Appends answer to p with id answer
  createAnswer.appendChild(addAnswer);
  console.log("appends answer to p");

  // Creates div for gradient background
  var addBackground = document.createElement("div");
  addBackground.setAttribute("id", "answer-background");

  // Creates div for die
  var addDie = document.createElement("div");
  addDie.setAttribute("id", "get-your-answer");
  addDie.setAttribute("class", "die-down");
  console.log("addDie");

  // Appends p for answer to die div
  addDie.appendChild(createAnswer);

  // Adds die div into gradient background div
  addBackground.appendChild(addDie);
  console.log("Appends addDie to addBackground");

  // Adds die with answer and background to magic eight ball page
  var askQuestionSection = document.getElementById("ask-question-section");
  askQuestionSection.parentNode.insertBefore(addBackground, askQuestionSection.nextSibling);


  console.log("addBackground");

}


// what was js-graveyard-v2

var answer = {
  '1': 'It is<br>certain',
  '2': 'Without<br>a<br>doubt',
  '3': 'You may<br>rely on<br>it',
  '4': 'As I see<br>it<br>yes',
  '5': 'Most<br>likely',
  '6': 'Outlook<br>good',
  '7': 'Yes',
  '8': 'Signs<br>point to<br>yes',
  // '9': 'Reply hazy,<br>try<br>again',
  '10': 'Ask again<br>later',
  // '11': 'Better<br>not tell<br>you<br>now',
  '12': 'Cannot<br>predict<br>now',
  // '13': 'Concentrate<br>and ask<br>again',
  '14': 'Don\'t<br>count<br>on<br>it',
  '15': 'My<br>reply<br>is<br>no',
  '16': 'My<br>sources<br>say<br>no',
  '17': 'Outlook<br>not so<br>good',
  '18': 'It is<br>decidely<br>so',
  '19': 'Yes<br>definitely',
  // '20': 'Very<br>doubtful'
}

var dieUp = [9, 11, 13, 20];




// v2
function clickSubmitQuestion() {
  // randomAnswer takes answer and returns a random answer
  var randomAnswer = answer[Object.keys(answer)[Math.floor(Math.random() * Object.keys(answer).length)]];
  console.log(randomAnswer);

  // Creates the p for the answer
  var createAnswer = document.createElement("p");
  createAnswer.setAttribute("id", "answer");
  // can now use .innerHTML to "add answer" instead of the current var addAnswer below. This will allow <br>'s inside of the var answer output
  createAnswer.innerHTML = `${randomAnswer}`;
  console.log("p with random answer");

  // Adds answer
  // var addAnswer = document.createTextNode(`${randomAnswer}`);
  // console.log("adds answer");

  // Appends answer to p with id answer
  // createAnswer.appendChild(addAnswer);
  // console.log("appends answer to p");

  // Creates div for gradient background
  var addBackground = document.createElement("div");
  addBackground.setAttribute("id", "answer-background");

  // Creates div for die
  var addDie = document.createElement("div");
  addDie.setAttribute("id", "get-your-answer");
  addDie.setAttribute("class", "die-down");
  console.log("addDie");

  // Appends p for answer to die div
  addDie.appendChild(createAnswer);

  // Adds die div into gradient background div
  addBackground.appendChild(addDie);
  console.log("Appends addDie to addBackground");

  // Adds die with answer and background to magic eight ball page
  var askQuestionSection = document.getElementById("ask-question-section");
  askQuestionSection.parentNode.insertBefore(addBackground, askQuestionSection.nextSibling);


  console.log("addBackground");

  return false;
}



function removeAnswer() {
  document.getElementsByClassName("eight-ball-img").style.display = "none";
  // document.getElementById("get-your-answer").style.display = "none";
  // document.getElementById("answer").style.display = "none";
  console.log("removeAnswer is firing");

}



// what was js-graveyard-v3

// var answer = {
//   '1': 'It is<br>certain',
//   '2': 'Without<br>a<br>doubt',
//   '3': 'You may<br>rely on<br>it',
//   '4': 'As I see<br>it<br>yes',
//   '5': 'Most<br>likely',
//   '6': 'Outlook<br>good',
//   '7': 'Yes',
//   '8': 'Signs<br>point to<br>yes',
//   '9': 'Reply<br>hazy,<br>try again', //dieUp
//   '10': 'Ask again<br>later',
//   '11': 'Better<br>not tell<br>you<br>now', //dieUp
//   '12': 'Cannot<br>predict<br>now',
//   '13': 'Concentrate<br>and ask<br>again',
//   '14': 'Don\'t<br>count<br>on<br>it',
//   '15': 'My<br>reply<br>is<br>no',
//   '16': 'My<br>sources<br>say<br>no',
//   '17': 'Outlook<br>not so<br>good',
//   '18': 'It is<br>decidely<br>so',
//   '19': 'Yes<br>definitely',
//   '20': 'Very<br>doubtful' //dieUp
// }

var answer = [
  { 'answer': 'It is<br>certain' },
  { 'answer': 'Without<br>a<br>doubt' },
  { 'answer': 'You may<br>rely on<br>it' },
  { 'answer': 'As I see<br>it<br>yes' },
  { 'answer': 'Most<br>likely' },
  { 'answer': 'Outlook<br>good' },
  { 'answer': 'Yes' },
  { 'answer': 'Signs<br>point to<br>yes' },
  { 'answer': 'Reply<br>hazy,<br>try again', 'direction': 'dieUp' },  //dieUp
  { 'answer': 'Ask again<br>later' },
  { 'answer': 'Better<br>not tell<br>you<br>now', 'direction': 'dieUp' },  //dieUp
  { 'answer': 'Cannot<br>predict<br>now' },
  { 'answer': 'Concentrate<br>and ask<br>again' },
  { 'answer': 'Don\'t<br>count<br>on<br>it' },
  { 'answer': 'My<br>reply<br>is<br>no' },
  { 'answer': 'My<br>sources<br>say<br>no' },
  { 'answer': 'Outlook<br>not so<br>good' },
  { 'answer': 'It is<br>decidely<br>so' },
  { 'answer': 'Yes<br>definitely' },
  { 'answer': 'Very<br>doubtful', 'direction': 'dieUp' } //dieUp
]




// v2.2
function clickSubmitQuestion() {
  // randomAnswer takes answer and returns a random answer
  var randomAnswerID = Object.keys(answer)[Math.floor(Math.random() * Object.keys(answer).length)];
  var randomAnswer = answer[randomAnswerID];
  console.log(randomAnswer);

  // Creates the p for the answer
  var createAnswer = document.createElement("p");
  createAnswer.setAttribute("id", "answer");
  // can now use .innerHTML to "add answer" instead of the current var addAnswer below. This will allow <br>'s inside of the var answer output
  createAnswer.innerHTML = `${randomAnswer}`;
  console.log("p with random answer");

  // Adds answer
  // var addAnswer = document.createTextNode(`${randomAnswer}`);
  // console.log("adds answer");

  // Appends answer to p with id answer
  // createAnswer.appendChild(addAnswer);
  // console.log("appends answer to p");

  // Creates div for gradient background
  var addBackground = document.createElement("div");
  addBackground.setAttribute("id", "answer-background");

  // Creates div for die
  var addDie = document.createElement("div");
  addDie.setAttribute("id", "get-your-answer");
  if (dieUp.indexOf(randomAnswerID) > -1) {
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
}



function removeAnswer() {
  document.getElementsByClassName("eight-ball-img").style.display = "none";
  // document.getElementById("get-your-answer").style.display = "none";
  // document.getElementById("answer").style.display = "none";
  console.log("removeAnswer is firing");

}

// v3

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
    { 'answer': 'It is<br>certain' },
    { 'answer': 'Without<br>a<br>doubt' },
    { 'answer': 'You may<br>rely on<br>it' },
    { 'answer': 'As I see<br>it<br>yes' },
    { 'answer': 'Most<br>likely' },
    { 'answer': 'Outlook<br>good' },
    { 'answer': 'Yes' },
    { 'answer': 'Signs<br>point to<br>yes' },
    { 'answer': 'Reply<br>hazy,<br>try again', 'direction': 'dieUp' },  //dieUp
    { 'answer': 'Ask again<br>later' },
    { 'answer': 'Better<br>not tell<br>you<br>now', 'direction': 'dieUp' },  //dieUp
    { 'answer': 'Cannot<br>predict<br>now' },
    { 'answer': 'Concentrate<br>and ask<br>again' },
    { 'answer': 'Don\'t<br>count<br>on<br>it' },
    { 'answer': 'My<br>reply<br>is<br>no' },
    { 'answer': 'My<br>sources<br>say<br>no' },
    { 'answer': 'Outlook<br>not so<br>good' },
    { 'answer': 'It is<br>decidely<br>so' },
    { 'answer': 'Yes<br>definitely', 'direction': 'dieUp' },  //dieUp 
    { 'answer': 'Very<br>doubtful', 'direction': 'dieUp' } //dieUp
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


// I want the Submit Your Question button to convert to a Ask Another Question button
// I believe I need an event listener on the button to listen for a click
// I want the click to changed the id of submitQuestion to questionAsked that changes the functionality of the button to "reset" the answer and clears the question, using the resetAnswer function


// Function that resets answer
// function updateClass() {
//   if (this.classList.contains('not-answered')) {
//     this.classList.remove('not-answered');
//   } else this.classList.add('answered');
//   console.log('Adding or removing class answered is working from updateClass');
// };

// function resetAnswer() {
//     document.getElementById('submitQuestion').addEventListener('click', updateClass);
// };

function clickResetButton() {
  // removes answer from DOM when reset button is clicked
  const parentElem = document.getElementById('answer-wrapper');
  const childElem = document.getElementById('answer-background');
  parentElem.removeChild(childElem);

  // removes question from form input
  document.getElementById('form-for-question').reset();

  if (btnText.value == 'Ask Another Question') {
    document.getElementById('submitQuestion').setAttribute('onclick', 'resetAnswer2();');
    btnText.value = 'Submit Your Question';
    btnText.innerHTML = 'Submit Your Question';
  }
}


function resetAnswer2() {
  // document.getElementById('submitQuestion').addEventListener('click', updateClass2);
  var btnText = document.getElementById('submitQuestion');
  if (btnText.value == 'Submit Your Question') {
    btnText.value = 'Ask Another Question';
    btnText.innerHTML = 'Ask Another Question';
    document.getElementById('submitQuestion').setAttribute('onclick', 'clickResetButton();');
  }
  // else {
  //   document.getElementById('submitQuestion').setAttribute('onclick', 'resetAnswer2();');
  //   btnText.value = 'Submit Your Question';
  //   btnText.innerHTML = 'Submit Your Question';
  // }

}
