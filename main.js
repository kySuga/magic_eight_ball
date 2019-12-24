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



function removeAnswer() {
  document.getElementsByClassName("eight-ball-img").style.display = "none";
  // document.getElementById("get-your-answer").style.display = "none";
  // document.getElementById("answer").style.display = "none";
  console.log("removeAnswer is firing");

}