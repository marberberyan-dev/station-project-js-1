const textInput = document.getElementById("textInput");
const lettersEl = document.getElementById("Letters");
const wordsEl = document.getElementById("Words");
const sentencesEl = document.getElementById("Sentences");
const backgroundButton = document.getElementById("randomBackground")

textInput.addEventListener("input", updateCounts);
backgroundButton.addEventListener("click", randomBackground);

function updateCounts() {
  const text = textInput.value;

  // Count letters (excluding spaces)
  const letters = text.replace(/\s/g, "").length;

  // Count words
  const words = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

  // Count sentences
  const sentences = text
    .split(/[.!?]+/)
    .filter(sentence => sentence.trim().length > 0)
    .length;

  lettersEl.textContent = "Letters: " + letters;
  wordsEl.textContent = "Words: " + words;
  sentencesEl.textContent =  "Sentences: " + sentences;
}

function randomBackground() {
  const colors = [
    "#ff9a9e",
    "#fad0c4",
    "#a1c4fd",
    "#c2e9fb",
    "#d4fc79",
    "#96e6a1",
    "#fbc2eb",
    "#a6c1ee"
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}