const surpriseBtn = document.getElementById("surpriseBtn");
const letter = document.getElementById("letter");

surpriseBtn.addEventListener("click", function () {
  letter.classList.toggle("hidden");

  if (letter.classList.contains("hidden")) {
    surpriseBtn.textContent = "Open your surprise 💌";
  } else {
    surpriseBtn.textContent = "Close your letter 💗";
    letter.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

// Change this to your special date: YYYY-MM-DD
const targetDate = new Date("2027-08-31T00:00:00");

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;
  const display = document.getElementById("countdown");

  if (difference <= 0) {
    display.textContent = "Our special day is here! 💗";
    return;
  }

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  display.textContent =
    `${days} days, ${hours} hours, ` +
    `${minutes} minutes, ${seconds} seconds 💕`;
}

updateCountdown();
setInterval(updateCountdown, 1000);