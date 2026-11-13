
function openLetter() {
  const letter = document.getElementById("letter");

  letter.classList.toggle("show");

  if (letter.classList.contains("show")) {
    letter.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

const messages = [
  "รักเธอมากกว่าที่เธอคิดอีกนะ 💗",
  "ขอบคุณที่เป็นความสุขของเรา 🌷",
  "วันนี้ พรุ่งนี้ และวันต่อ ๆ ไป ก็ยังอยากมีเธอ",
  "เธอเป็นคนที่พิเศษที่สุดสำหรับเรา 💕",
  "คิดถึงนะ อยากให้รู้ไว้เสมอ",
  "ขอให้เรายิ้มให้กันไปนาน ๆ นะ",
  "โชคดีมากเลยที่ได้เจอเธอ ♡"
];

function showLove() {
  const random = Math.floor(Math.random() * messages.length);

  document.getElementById("loveText").textContent =
    messages[random];

  createHearts();
}

function createHearts() {
  const container = document.getElementById("hearts");

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = ["♥", "♡", "💕"][Math.floor(Math.random() * 3)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    container.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove());
  }
}

