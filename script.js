
// script.js

async function getQuotes() {
  const response = await fetch('quotes.json');
  const quotes = await response.json();
  return quotes;
}

function getRandomQuote(quotes) {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function showQuote() {
  getQuotes().then(quotes => {
    const randomQuote = getRandomQuote(quotes);
    const quoteText = document.getElementById('quote');
    quoteText.innerText = randomQuote.quote; // 這裡修正重點
  });
}

document.getElementById('refresh').addEventListener('click', showQuote);

// 頁面一載入就先顯示一句
showQuote();
