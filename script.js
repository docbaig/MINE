const canvas = document.getElementById('loveMatrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const loveTexts = ['Aqdus', 'I Love You', '❤️', '💖', 'Zahra', 'Will You Marry me ?'];
const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ff69b4'; // pink color
  ctx.font = '${fontSize}px Arial';

  for (let i = 0; i < drops.length; i++) {
    const text = loveTexts[Math.floor(Math.random() * loveTexts.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

// Optional: make canvas resize with screen
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});