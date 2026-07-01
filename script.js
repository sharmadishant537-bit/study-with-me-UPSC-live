function updateWebsite() {
  const now = new Date();
  const hour = now.getHours();

  // CLOCK
  const clock = document.getElementById("clock");
  if (clock) {
    clock.innerText = now.toLocaleTimeString("en-IN");
  }

  // DATE
  const date = document.getElementById("date");
  if (date) {
    date.innerText = now.toLocaleDateString("en-IN");
  }

  // LIVE STATUS
  const live = document.querySelector(".live-badge");

  if (live) {
    if (hour >= 23 || hour < 11) {
      live.innerText = "🔴 LIVE NOW";
      live.style.display = "block";
      live.style.background = "#ff2d55";
    } else {
      live.innerText = "⚫ OFF TIME";
      live.style.display = "block";
      live.style.background = "#444";
    }
  }
}

setInterval(updateWebsite, 1000);
updateWebsite();
const status = document.getElementById("status");
const joinBtn = document.getElementById("joinBtn");

function updateStatus() {
  const hour = new Date().getHours();

  if (hour >= 23 || hour < 11) {
    status.innerHTML = "🔴 LIVE NOW";
    status.style.background = "#ff2d55";
    joinBtn.style.display = "inline-block";
  } else {
    status.innerHTML = "⚫ OFF TIME";
    status.style.background = "#555";
    joinBtn.style.display = "none";
  }
}

updateStatus();
setInterval(updateStatus, 60000);
