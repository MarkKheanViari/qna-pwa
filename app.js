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
  1: "Did you eat?",
  2: "Why? Eat your food!",
  3: "EAT!"
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
}

function handleYes() {
  messageBox.textContent = 'Yeheyyy';
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
    updateQuestion();
  } else {
    questionBox.textContent = questions[3];
  }
  yesButtonSize += 5;
  yesBtn.style.fontSize = `${yesButtonSize}px`;
  if (noClickCount >= 10) {
    noBtn.style.display = 'none';
  }
}

// Start the app
init();