const surpriseBtn = document.getElementById("surpriseBtn");
const birthdayCard = document.getElementById("birthdayCard");
const surprise = document.getElementById("surprise");
const floating = document.querySelector(".floating");

// Show surprise
surpriseBtn.addEventListener("click", () => {
  birthdayCard.classList.add("hidden");
  surprise.classList.remove("hidden");
  startCelebration();
});

// Floating emojis generator
function createFloating() {
  const span = document.createElement("span");
  const items = ["💖", "🌸", "🎈", "💐", "✨", "🎉"];
  span.innerHTML = items[Math.floor(Math.random() * items.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = Math.random() * 3 + 4 + "s";
  floating.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 7000);
}

// Extra celebration after click
function startCelebration() {
  setInterval(createFloating, 200);
}

// Soft floating in background
setInterval(createFloating, 400);
