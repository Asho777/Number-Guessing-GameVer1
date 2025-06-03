document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.game-section');
  const startBtn = document.getElementById('start-btn');
  const nextBtns = document.querySelectorAll('.next-btn');
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const playAgainYesBtn = document.getElementById('play-again-yes');
  const playAgainNoBtn = document.getElementById('play-again-no');
  const randomNumberSpan = document.getElementById('random-number');
  const finalResultSpan = document.getElementById('final-result');
  
  let addNumber = 6; // Default value

  // Function to show a specific section and hide others
  function showSection(sectionId) {
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }

  // Function to generate a random number between min and max (inclusive)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to set a new random "add number" and update the result
  function setRandomAddNumber() {
    // Generate a random number between 4 and 20
    addNumber = getRandomNumber(4, 20);
    
    // Update the displayed number in step 2
    randomNumberSpan.textContent = addNumber;
    
    // Update the final result (which will always be addNumber/2)
    finalResultSpan.textContent = addNumber / 2;
  }

  // Function to restart the game
  function restartGame() {
    setRandomAddNumber(); // Set a new random number when starting the game
    showSection('intro');
  }

  // Set up the sequence of sections
  const sectionSequence = ['intro', 'step1', 'step2', 'step3', 'step4', 'result'];

  // Start button event listener
  startBtn.addEventListener('click', () => {
    setRandomAddNumber(); // Set a new random number when starting the game
    showSection('step1');
  });

  // Next button event listeners
  nextBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const nextSectionId = sectionSequence[index + 2]; // +2 because we start at index 0 and skip intro
      showSection(nextSectionId);
    });
  });

  // Yes button event listener
  yesBtn.addEventListener('click', () => {
    showSection('correct-answer');
  });

  // No button event listener
  noBtn.addEventListener('click', () => {
    showSection('wrong-answer');
  });

  // Play again button event listeners
  playAgainYesBtn.addEventListener('click', restartGame);
  playAgainNoBtn.addEventListener('click', restartGame);

  // Initialize with a random number
  setRandomAddNumber();
});
