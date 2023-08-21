const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const unit = document.getElementById("unit");
const slider = document.getElementById("slider");
const clear = document.querySelector(".Clear");
const color = document.querySelector("#color");
let isdrawing = false;
let startOffsetX, startOffsetY;
let size = 10;
color.value = "#f345d6";
let Color = color.value;

slider.addEventListener("change", (e) => {
  val = e.target.value;
  unit.innerHTML = `${val}px`;
  size = val;
  console.log(size);
});
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
  ctx.arc(x, y, size, 0, 2 * c);
  ctx.fillStyle = Color;
  ctx.fill();
}
function drawLine(x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = Color;
  ctx.lineWidth = `${size * 2}`;
  ctx.stroke();
}

endDraw = () => {
  isdrawing = false;
};
clear.addEventListener("click", () => {
  isdrawing || ctx.clearRect(0, 0, canvas.width, canvas.height);
});
color.addEventListener("change", (e) => {
  Color = e.target.value;
});
canvas.addEventListener("mouseup", endDraw);
canvas.addEventListener("mouseleave", endDraw);
