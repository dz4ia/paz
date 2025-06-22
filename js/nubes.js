const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nubes = Array.from({ length: 10 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height * 0.5,
  size: 40 + Math.random() * 60,
  speed: 0.3 + Math.random() * 0.7
}));

function dibujarNube(nube) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.ellipse(nube.x, nube.y, nube.size, nube.size * 0.6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.ellipse(nube.x + nube.size * 0.5, nube.y + 10, nube.size * 0.6, nube.size * 0.4, 0, 0, Math.PI * 2);
  ctx.ellipse(nube.x - nube.size * 0.4, nube.y + 5, nube.size * 0.7, nube.size * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let nube of nubes) {
    dibujarNube(nube);
    nube.x += nube.speed;
    if (nube.x - nube.size > canvas.width) {
      nube.x = -nube.size;
      nube.y = Math.random() * canvas.height * 0.5;
    }
  }
  requestAnimationFrame(animar);
}

animar();
