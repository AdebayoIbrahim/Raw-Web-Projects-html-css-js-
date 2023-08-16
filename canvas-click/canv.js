const canvasEle = document.getElementById("drawContainer");
const context = canvasEle.getContext("2d");
let startPosition = { x: 0, y: 0 };
let lineCoordinates = { x: 0, y: 0 };
let isDrawStart = false;

const getClientOffset = (event) => {
  const { pageX, pageY } = event.touches ? event.touches[0] : event;
  const x = pageX - canvasEle.offsetLeft;
  const y = pageY - canvasEle.offsetTop;

  return {
    x,
    y,
  };
};

const drawLine = () => {
  context.beginPath();
  context.moveTo(startPosition.x, startPosition.y);
  context.lineTo(lineCoordinates.x, lineCoordinates.y);
  context.strokeStyle = "orange";
  context.lineWidth = "4";
  context.stroke();
};

const mouseDownListener = (event) => {
  startPosition = getClientOffset(event);
  isDrawStart = true;
};

const mouseMoveListener = (event) => {
  if (!isDrawStart) return;

  lineCoordinates = getClientOffset(event);
  clearCanvas();
  drawLine();
};

const mouseupListener = (event) => {
  isDrawStart = false;
};

const clearCanvas = () => {
  context.clearRect(0, 0, canvasEle.width, canvasEle.height);
};

canvasEle.addEventListener("mousedown", mouseDownListener);
canvasEle.addEventListener("mousemove", mouseMoveListener);
canvasEle.addEventListener("mouseup", mouseupListener);
