
// ===================================
// ตั้งค่าข้อมูลคู่รัก
// ===================================

const couple = {
  name1: "คนที่ 1",
  name2: "คนที่ 2",
  startDate: "2026-01-01"
};

document.getElementById("coupleNames").textContent =
  `${couple.name1} & ${couple.name2}`;

// ===================================
// นับวันครบรอบ
// ===================================

function updateDays() {
  const start = new Date(couple.startDate + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Math.floor(
    (today - start) / (1000 * 60 * 60 * 24)
  );

  document.getElementById("days").textContent =
    days >= 0 ? days.toLocaleString("th-TH") : "0";
}

updateDays();

// ===================================
// บันทึกความทรงจำ
// ===================================

let memories = JSON.parse(
  localStorage.getItem("ourMemories") || "[]"
);

function addMemory() {
  const input = document.getElementById("memoryInput");
  const value = input.value.trim();

  if (!value) {
    alert("เขียนความทรงจำก่อนนะ 💗");
    return;
  }

  memories.unshift({
    text: value,
    date: new Date().toLocaleDateString("th-TH")
  });

  localStorage.setItem("ourMemories", JSON.stringify(memories));
  input.value = "";
  showMemories();
}

function showMemories() {
  const list = document.getElementById("memoryList");
  list.replaceChildren();

  memories.forEach(item => {
    const box = document.createElement("div");
    box.className = "entry";

    const content = document.createElement("p");
    content.textContent = "🌷 " + item.text;

    const date = document.createElement("small");
    date.textContent = item.date;

    box.append(content, date);
    list.appendChild(box);
  });
}

showMemories();

// ===================================
// ส่งข้อความถึงกัน
// ===================================

let messages = JSON.parse(
  localStorage.getItem("ourMessages") || "[]"
);

function addMessage() {
  const input = document.getElementById("messageInput");
  const sender = document.getElementById("sender").value;
  const value = input.value.trim();

  if (!value) {
    alert("เขียนข้อความก่อนส่งนะ 💌");
    return;
  }

  messages.unshift({
    sender,
    text: value,
    date: new Date().toLocaleString("th-TH")
  });

  localStorage.setItem("ourMessages", JSON.stringify(messages));
  input.value = "";
  showMessages();
}

function showMessages() {
  const list = document.getElementById("messageList");
  list.replaceChildren();

  messages.forEach(item => {
    const box = document.createElement("div");
    box.className = "entry";

    const title = document.createElement("strong");
    title.textContent = "💗 " + item.sender;

    const content = document.createElement("p");
    content.textContent = item.text;

    const date = document.createElement("small");
    date.textContent = item.date;

    box.append(title, content, date);
    list.appendChild(box);
  });
}

showMessages();

// ===================================
// อัลบั้มรูปคู่
// ===================================

let photos = JSON.parse(
  localStorage.getItem("ourPhotos") || "[]"
);

const photoInput = document.getElementById("photoInput");

photoInput.addEventListener("change", function() {
  Array.from(this.files).forEach(file => {
    if (!file.type.startsWith("image/")) return;

    if (file.size > 1.5 * 1024 * 1024) {
      alert("กรุณาเลือกรูปขนาดไม่เกิน 1.5 MB");
      return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
      photos.push(event.target.result);

      try {
        localStorage.setItem("ourPhotos", JSON.stringify(photos));
        showPhotos();
      } catch (error) {
        photos.pop();
        alert("พื้นที่จัดเก็บรูปเต็ม กรุณาลบรูปบางส่วน");
      }
    };

    reader.readAsDataURL(file);
  });

  this.value = "";
});

function showPhotos() {
  const gallery = document.getElementById("galleryList");
  gallery.replaceChildren();

  photos.forEach((photo, index) => {
    const box = document.createElement("div");

    const img = document.createElement("img");
    img.src = photo;
    img.alt = "รูปความทรงจำ";

    const button = document.createElement("button");
    button.textContent = "ลบรูป";

    button.onclick = function() {
      if (confirm("ต้องการลบรูปนี้หรือไม่?")) {
        photos.splice(index, 1);
        localStorage.setItem("ourPhotos", JSON.stringify(photos));
        showPhotos();
      }
    };

    box.append(img, button);
    gallery.appendChild(box);
  });
}

showPhotos();

// ===================================
// สุ่มข้อความบอกรัก
// ===================================

const loveMessages = [
  "ขอบคุณที่เข้ามาในชีวิตนะ 💗",
  "วันนี้ก็ยังเลือกเธอเหมือนเดิม",
  "เธอเป็นความทรงจำที่ดีที่สุด",
  "อย่าลืมดูแลตัวเองด้วยนะ",
  "มีเธอแล้วทุกวันพิเศษขึ้น",
  "ขอบคุณที่อยู่ข้างกันนะ",
  "เธอคือคนสำคัญของเรา 🌷",
  "ขอให้เรามีรอยยิ้มด้วยกันทุกวัน"
];

function randomLove() {
  const index = Math.floor(Math.random() * loveMessages.length);

  document.getElementById("surpriseText").textContent =
    "💌 " + loveMessages[index];
}
