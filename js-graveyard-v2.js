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