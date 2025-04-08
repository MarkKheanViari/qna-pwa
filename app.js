// DOM elements
const giftBox = document.getElementById('giftBox');
const prizeBox = document.getElementById('prize');
const poppersContainer = document.getElementById('poppers');

// Function to handle gift box click
function openGift() {
  // Hide the gift box
  giftBox.classList.add('hidden');

  // Reveal the prize
  prizeBox.textContent = '🫰';
  prizeBox.classList.add('reveal');

  // Trigger poppers effect
  poppersContainer.classList.add('active');
  createPoppers();
}

// Function to create popper particles
function createPoppers() {
  const numPoppers = 30; // Number of popper particles
  for (let i = 0; i < numPoppers; i++) {
    const popper = document.createElement('div');
    popper.classList.add('popper');
    // Randomize position and animation delay
    popper.style.left = `${Math.random() * 100}%`;
    popper.style.animationDelay = `${Math.random() * 0.5}s`;
    poppersContainer.appendChild(popper);
  }
}