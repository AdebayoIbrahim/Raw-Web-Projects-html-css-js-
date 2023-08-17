const container = document.getElementById("container");
const canvas = document.getElementById("drawContainer");
const ctx = canvas.getContext("2d");

const click = document.querySelector("#click");
const draw = document.querySelector("#draw");

let isDrawing = false;
let startOffsetX, startOffsetY;
//endline
let drawn = false;

click.addEventListener("click", () => {
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
    ctx.strokeStyle = "red";
    ctx.stroke();
  });

  endLine = () => {
    isDrawing = false;
    drawn = true;
  };
  container.addEventListener("mouseup", endLine);
  container.addEventListener("mousleave", endLine);
});

const count = document.getElementById("count");
//count functioning
draw.addEventListener("click", () => {
  if (!drawn) {
    alert("please draw the ridge line to use this function");
  } else {
    isDrawing = false;
    let type = "disabled";
    click.setAttribute(type, type);
    click.style.opacity = ".5";

    //counting scores
    canvas.addEventListener("click", () => {
      console.log("clicked now!!");
    });
  }
});
