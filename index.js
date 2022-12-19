const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const mainSize = document.getElementById("size");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const clear = document.getElementById("clear");

mainSize.innerHTML = 0;

increase.addEventListener("click", (e) => {
  if (Number(mainSize.innerHTML) == 20) {
    mainSize.innerHTML = Number(mainSize.innerHTML) + 0;
  } else {
    mainSize.innerHTML = Number(mainSize.innerHTML) + 1;
  }
});

decrease.addEventListener("click", (e) => {
  if (Number(mainSize.innerHTML) == 0) {
    mainSize.innerHTML = Number(mainSize.innerHTML) - 0;
  } else {
    mainSize.innerHTML = Number(mainSize.innerHTML) - 1;
  }
});

clear.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let size = Number(mainSize.innerHTML);
let color = "black";

let x;
let y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
