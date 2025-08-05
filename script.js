
fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        document.getElementById('quote').textContent = randomQuote;
    })
    .catch(error => {
        document.getElementById('quote').textContent = "載入語錄失敗。";
    });
