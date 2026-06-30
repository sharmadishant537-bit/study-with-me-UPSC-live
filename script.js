// LIVE CLOCK + DATE + STATUS SYSTEM

function updateWebsite() {
  const now = new Date();

  // CLOCK
  const clock = document.getElementById("clock");
  if (clock) {
    clock.innerText = now.toLocaleTimeString("en-IN");
  }

  // DATE
  const date = document.getElementById("date");
  if (date) {
    date.innerText = now.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  // LIVE STATUS (11 PM to 11 AM)
  const hour = now.getHours();
  const liveBadge = document.querySelector(".live-badge");

  if (liveBadge) {
    if (hour >= 23 || hour < 11) {
      liveBadge.style.display = "block";
      liveBadge.innerText = "🔴 LIVE NOW";
      liveBadge.style.background = "#ff2d55";
    } else {
      liveBadge.style.display = "none";
    }
  }
}

// MOTIVATION QUOTES
const quotes = [
  "Discipline is the key to success.",
  "Stay focused and never give up.",
  "Small efforts every day = Big success.",
  "Your future depends on today.",
  "Consistency beats motivation."
];

let i = 0;

function changeQuote() {
  const quoteBox = document.getElementById("quote");
  if (quoteBox) {
    quoteBox.innerText = quotes[i];
    i = (i + 1) % quotes.length;
  }
}

// RUN EVERY SECOND
setInterval(updateWebsite, 1000);
updateWebsite();

// CHANGE QUOTE EVERY 5 SEC
setInterval(changeQuote, 5000);
changeQuote();
