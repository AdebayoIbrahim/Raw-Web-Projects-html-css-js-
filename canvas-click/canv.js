const canvasContainer = document.getElementById("canvas-container");
const image = document.getElementById("container");
const drawCanvas = document.getElementById("drawContainer");
const ctx = drawCanvas.getContext("2d");

let isDrawing = false;
let startOffsetX, startOffsetY;

image.addEventListener("mousedown", startDrawing);
image.addEventListener("mousemove", drawLine);
image.addEventListener("mouseup", endDrawing);
image.addEventListener("mouseleave", endDrawing);

function startDrawing(event) {
  isDrawing = true;
  const imageRect = image.getBoundingClientRect();
  startOffsetX = event.clientX - imageRect.left;
  startOffsetY = event.clientY - imageRect.top;
}

function drawLine(event) {
  if (!isDrawing) return;

  const imageRect = image.getBoundingClientRect();
  const endOffsetX = event.clientX - imageRect.left;
  const endOffsetY = event.clientY - imageRect.top;

  ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
  ctx.beginPath();
  ctx.moveTo(startOffsetX, startOffsetY);
  ctx.lineTo(endOffsetX, endOffsetY);
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function endDrawing() {
  isDrawing = false;
}
