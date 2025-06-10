const results = [
  "Definitely not.",
  "Brain loading… please wait.",
  "Thinking about food.",
  "You are overthinking!",
  "404 Brain Not Found.",
  "Temporarily out of thoughts.",
  "Thinking in progress...",
  "You might be dreaming.",
  "You're thinking… about not thinking."
];

function checkThinking() {
  const resultDiv = document.getElementById("result");
  const gif = document.getElementById("gif");
  resultDiv.textContent = "Scanning brainwaves...";
  gif.style.display = "none";
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * results.length);
    resultDiv.textContent = results[randomIndex];
  }, 2000);
}

function rebootBrain() {
  const resultDiv = document.getElementById("result");
  const gif = document.getElementById("gif");
  resultDiv.textContent = "Rebooting brain...";
  gif.style.display = "block";
  setTimeout(() => {
    resultDiv.textContent = "Brain successfully rebooted! Still not thinking though...";
    gif.style.display = "none";
  }, 3000);
}
