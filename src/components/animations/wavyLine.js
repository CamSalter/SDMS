const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;

// Draw the wavy line
const drawLine = () => {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  for (let i = 0; i <= canvas.width; i++) {
    const x = i;
    const y = canvas.height / 2 + Math.sin(i * 0.05) * 50;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.stroke();
}

// Animate the wavy line
const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLine();
}

animate();
