fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.length);
    document.getElementById("quote").textContent = data[randomIndex][0];
    document.getElementById("jojoAdvice").textContent = data[randomIndex][1];
  });

const hour = new Date().getHours();
if (hour >= 6 && hour < 17) {
  document.body.style.backgroundColor = "#d0f0fd";
} else if (hour >= 17 && hour < 20) {
  document.body.style.backgroundColor = "#dbcafe";
} else {
  document.body.style.backgroundColor = "#3b3b5c";
  document.body.style.color = "#f5f5f5";
}
