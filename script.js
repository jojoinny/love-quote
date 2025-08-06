// script.js

fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const quoteParts = data[randomIndex].split('\n');

    const quote = quoteParts[0] || "";
    const suggestion = quoteParts[1] || "";

    document.getElementById('quote').textContent = quote;
    document.getElementById('suggestion').textContent = suggestion;
  })
  .catch(error => {
    console.error('無法載入語錄檔案:', error);
  });

// 時間變色
const hour = new Date().getHours();
if (hour >= 6 && hour < 17) {
  document.body.style.backgroundColor = "#d0f0fd"; // 白天：療癒藍
} else if (hour >= 17 && hour < 20) {
  document.body.style.backgroundColor = "#dbcafe"; // 黃昏：奶茶色
} else {
  document.body.style.backgroundColor = "#3b3b5c"; // 深夜：星夜色
  document.body.style.color = "#f5f5f5";
}
