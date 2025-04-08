// State variables
let currentStep = 1;
let yesButtonSize = 16;
let noClickCount = 0;

// DOM elements
const questionBox = document.getElementById('question');
const messageBox = document.getElementById('message');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Questions
const questions = {
  1: "Nag Kaon ka na Love? 🥰",
  2: "Kumain ka na! 🍽️",
  3: "Kakain o Kakain?? 😚"
};

// Messages for "No" responses
const noMessages = {
  1: "Bakit hindi pa? 🥺",
  2: "Isa! 😤",
  3: "Please ❤️"
};

// Initialize the app
function init() {
  updateQuestion();
}

function updateQuestion() {
  questionBox.textContent = questions[currentStep];
  messageBox.textContent = '';
  yesBtn.style.display = 'inline-block';
  noBtn.style.display = noClickCount < 10 ? 'inline-block' : 'none';
  if (noClickCount >= 10) {
    messageBox.textContent = 'Wala kang no choice! 😜';
  }
}

function handleYes() {
  messageBox.textContent = 'Yeheyyy! Good job, Love! 🎉';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  questionBox.textContent = '';
  currentStep = 1;
  yesButtonSize = 16;
  noClickCount = 0;
  yesBtn.style.fontSize = `${yesButtonSize}px`;
}


function handleNo() {
  noClickCount++;
  if (currentStep < 3) {
    currentStep++;
    messageBox.textContent = noMessages[currentStep - 1];
  } else {
    messageBox.textContent = noMessages[3];
  }
  yesButtonSize += 5;
  yesBtn.style.fontSize = `${yesButtonSize}px`;
  if (noClickCount >= 10) {
    noBtn.style.display = 'none';
    messageBox.textContent = 'Wala kang no choice! 😜';
  }
  updateQuestion();
}

// Start the app
init();