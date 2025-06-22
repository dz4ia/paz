window.onload = function () {
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const palabras = ['TE AMO❤️', 'TE ADORO💕', 'HERMOSA💗', 'MARAVILLOSA💞', 
    'ENCANTADORA💖', 'PERFECTA💌', 'TIERNA💖', 'PRECIOSA💝', 'MI BIBI💞', 'MI NINI💞', 'MI COTITA💝', 'MAGNIFICA💘', 
    'BELLA💞', 'UNICA💓', 'BONITA💘', 'LINDA❤️', '💌', '💘', '💝', '💗', '💓',
      '💞', '💕', '❣️', '❤️'];
  const fontSize = 20;
  const columnas = Math.floor(canvas.width / (fontSize * 5)); // menos columnas, más espacio

  const caidas = Array.from({ length: columnas }, (_, i) => ({
    palabra: palabras[Math.floor(Math.random() * palabras.length)],
    x: i * fontSize * 6,
    y: Math.random() * -canvas.height,
    velocidad: 1 + Math.random() * 1
  }));

  function dibujar() {
    // Fondo totalmente opaco para eliminar el "rastro"
    ctx.fillStyle = 'rgb(82, 31, 31)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';
    ctx.textAlign = 'center';

    caidas.forEach((c) => {
      ctx.fillStyle = '#f00000';
      ctx.fillText(c.palabra, c.x + fontSize * 2, c.y);

      c.y += c.velocidad;

      if (c.y > canvas.height) {
        c.palabra = palabras[Math.floor(Math.random() * palabras.length)];
        c.y = -fontSize;
      }
    });
  }

  setInterval(dibujar, 5);
};
