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

