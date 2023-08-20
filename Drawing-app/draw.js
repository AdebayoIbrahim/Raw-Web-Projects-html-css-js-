const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let isdrawing = false;
let startOffsetX, startOffsetY;

canvas.addEventListener("mousedown", (e) => {
  isdrawing = true;
  //get position
  startOffsetX = e.offsetX;
  startOffsetY = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isdrawing) return;
  endOffsetX = e.offsetX;
  endOffsetY = e.offsetY;
  drawCircle(endOffsetX, endOffsetY);
  drawLine(startOffsetX, startOffsetY, endOffsetX, endOffsetY);

  startOffsetX = endOffsetX;
  startOffsetY = endOffsetY;
});

function drawCircle(x, y) {
  let c = Math.PI;
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * c);
  ctx.fillStyle = "blue";
  ctx.fill();
}
function drawLine(x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 20;
  ctx.stroke();
}

endDraw = () => {
  isdrawing = false;
  startOffsetX, startOffsetY, endOffsetX, (endOffsetY = undefined);
};

document.addEventListener("mouseup", endDraw);