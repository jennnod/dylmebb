const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const heartsContainer = document.getElementById('hearts-container');

// Array of funny messages for the "No" button
const noMessages = [
  "No",
  "beneran yang?",
  "sumpah?",
  "coba pikirin lagi bb!!",
  "terakhir!",
  "ish beneran gamau loh dia?",
  "menyesal sih kamu bb!",
  "ahh coba pikirin lagi bb!",
  "kamu serius yang?!",
  "kamu salah pencet kann!",
  "punya hati dikit gasih?!",
  "jangan terlalu cuek gitu!",
  "gimana? berubah pikiran?",
  "coba pikirin lagi yang? hiks*",
  "jadi ini jawabanmu bb?",
  "kamu beneran nyakitin hatiku loh ;(",
  "Plsss? :((",
  "Okay fine bb, tapi eum...",
  "aku mohon cantikku, plsss",
  "aku nangis beneran ini...",
  "jangan kyk gini ke aku plss :(",
  "aku bakal mati sendiri...",
  "Fine, aku bakal ulang lagi wle!"
];

let messageIndex = 0;
let yesBtnSize = 1;

noBtn.addEventListener('click', handleNoClick);
yesBtn.addEventListener('click', handleYesClick);

function handleNoClick() {
  messageIndex = (messageIndex + 1) % noMessages.length;
  const currentMessage = noMessages[messageIndex];
  noBtn.innerText = currentMessage;

  // Enhance the growth of the Yes button
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  const newSize = currentSize * 1.2; // 20% growth per click
  yesBtn.style.fontSize = `${newSize}px`;
  
  // Make it clearer by increasing padding too
  const currentPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
  yesBtn.style.padding = `${currentPadding * 1.5}px ${currentPadding * 2}px`;

  // Slightly shrink the No button (text)
  const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
  if (noSize > 5) { // Minimum readable size
    noBtn.style.fontSize = `${noSize * 0.9}px`;
  }
}

function handleYesClick() {
  questionScreen.classList.add('hidden');
  successScreen.classList.remove('hidden');
  
  // Start the celebration
  createHearts();
}

function createHearts() {
  const heartCount = 50;
  for (let i = 0; i < heartCount; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      
      // Random position and animation properties
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 3 + 's';
      heart.style.fontSize = Math.random() * 30 + 30 + 'px';
      
      heartsContainer.appendChild(heart);
      
      // Remove heart after animation
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 100);
  }
  
  // Continue creating hearts
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 30 + 30 + 'px';
    heartsContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}