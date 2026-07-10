// State tracking variables
let yuzusFed = 0;

// Array of random cute pet text reactions
const petMessages = [
  "✨ *Happy capybara noises* ✨ Capy closes her eyes and leans into your hand!",
  "💖 Capy wiggles her little ears! She absolutely loves the head scratches.",
  "💤 Cozy alert! Capy is so relaxed from your pets she might fall asleep right here.",
  "🌸 Capy nudges your hand with her nose asking for even more affection!",
  "🎀 Capy looks incredibly proud showing off her pink bow while you pet her."
];

function feedCapy() {
  const status = document.getElementById("status-message");
  const basket = document.getElementById("yuzu-basket");
  
  yuzusFed++;
  
  // Add a physical yuzu emoji element inside the basket view
  basket.innerHTML += "🍋";
  
  status.innerHTML = `🍡 Nom nom! Capy happily eats yuzu #${yuzusFed}!`;
  status.style.color = "#e6a100";
  
  // Simplified logic: Reset immediately when hitting 10 yuzus
  if (yuzusFed === 10) {
    status.innerHTML = "🛑 Oof, I'm full! Capy ate all 10 yuzus and reset her tummy!";
    status.style.color = "#d94168";
    
    // Instantly reset back to 0 and empty the basket
    yuzusFed = 0;
    basket.innerHTML = ""; 
  }
}

function petCapy() {
  const status = document.getElementById("status-message");
  
  // Draw a random index number out of our script array
  const randomIndex = Math.floor(Math.random() * petMessages.length);
  const selectedMessage = petMessages[randomIndex];
  
  status.innerHTML = selectedMessage;
  status.style.color = "#c97a8e"; 
}