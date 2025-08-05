fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    const random = data[Math.floor(Math.random() * data.length)];
    document.getElementById('quote').innerText = random.quote;
    document.getElementById('jojo-advice').innerText = random.jojo_advice;

    document.getElementById('loading').style.display = 'none';
    document.getElementById('quote-container').style.display = 'block';
  })
  .catch(error => {
    console.error('錯誤：', error);
    document.getElementById('loading').innerText = '無法載入語錄，請稍後再試。';
  });
