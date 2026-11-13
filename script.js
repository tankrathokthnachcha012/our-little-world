
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: #fff4f7;
  color: #87566b;
  text-align: center;
  overflow-x: hidden;
}

header {
  background: linear-gradient(135deg, #ffb6c9, #f6cce2);
  color: white;
  padding: 65px 15px;
}

header h1 {
  font-size: clamp(30px, 7vw, 48px);
  margin: 18px 0;
}

header p {
  line-height: 2;
}

main {
  max-width: 750px;
  margin: auto;
  padding: 20px;
}

.hero, .letter, .reason, .surprise, .final {
  background: white;
  margin: 30px 0;
  padding: 35px 20px;
  border-radius: 25px;
  box-shadow: 0 8px 25px #eecbd8;
}

.big-heart {
  color: #f28ba9;
  font-size: 85px;
  animation: heartbeat 1s infinite alternate;
}

@keyframes heartbeat {
  to { transform: scale(1.15); }
}

h2 {
  color: #d8789a;
  margin-bottom: 18px;
}

p {
  line-height: 2;
}

button {
  border: none;
  background: #ed91b0;
  color: white;
  padding: 14px 25px;
  border-radius: 30px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  transition: .3s;
}

button:hover {
  background: #d96e95;
  transform: translateY(-3px);
}

.letter {
  display: none;
  line-height: 2;
  background: #fffafd;
  border: 2px dashed #f1b6cc;
}

.letter.show {
  display: block;
  animation: appear .7s ease;
}

.envelope {
  font-size: 65px;
}

.letter h3 {
  color: #e184a4;
  margin-top: 20px;
}

.reason-list {
  display: grid;
  gap: 12px;
}

.reason-list div {
  background: #fff0f5;
  padding: 15px;
  border-radius: 15px;
  color: #bd7290;
}

#loveText {
  color: #df789b;
  margin-top: 25px;
  line-height: 1.8;
}

.hearts {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 5;
  overflow: hidden;
}

.floating-heart {
  position: absolute;
  bottom: -30px;
  animation: floatUp 5s linear forwards;
  opacity: .8;
}

@keyframes floatUp {
  to {
    transform: translateY(-110vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes appear {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

footer {
  background: #f5cbd9;
  color: white;
  padding: 25px;
}

@media (max-width: 500px) {
  header { padding: 50px 12px; }
  main { padding: 12px; }
  .hero, .letter, .reason, .surprise, .final {
    padding: 25px 15px;
  }
}
