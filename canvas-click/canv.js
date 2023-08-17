const container = document.getElementById("container");
const canvas = document.getElementById("drawContainer");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let startOffsetX, startOffsetY;

container.addEventListener("mousedown", (e) => {
  isDrawing = true;
  boundRect = container.getBoundingClientRect();

  startOffsetX = e.clientX - boundRect.left;
  startOffsetY = e.clientY - boundRect.top;
});

container.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  boundRect = container.getBoundingClientRect();
  endOffsetX = e.clientX - boundRect.left;
  endOffsetY = e.clientY - boundRect.top;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(startOffsetX, startOffsetY);
  ctx.lineTo(endOffsetX, endOffsetY);
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.stroke();
});

endLine = () => {
  isDrawing = false;
};
container.addEventListener("mouseup", endLine);
container.addEventListener("mousleave", endLine);
