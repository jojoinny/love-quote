const data = [
  {
    quote: "他也在想你",
    jojo_advice: "或許可以先從簡單的對話開始。"
  },
  {
    quote: "他不會主動",
    jojo_advice: "可以暫時讓心安靜下來，答案會慢慢浮現。"
  },
  {
    quote: "如果你也喜歡他",
    jojo_advice: "不如給彼此一點時間，讓感覺慢慢靠近。"
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * data.length);
  const quote = data[randomIndex];
  document.getElementById("quote").textContent = quote.quote;
  document.getElementById("jojoAdvice").textContent = quote.jojo_advice;
}

window.onload = function () {
  getRandomQuote();
  document.getElementById("newQuoteBtn").addEventListener("click", getRandomQuote);
};
