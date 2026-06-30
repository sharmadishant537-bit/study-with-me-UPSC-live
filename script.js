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
