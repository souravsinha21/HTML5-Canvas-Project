var sizeW = 500;
var sizeH = sizeW*(1/1);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const totalLines = 36; // Total number of lines
const linesPerRow = 6; // Number of lines per row
const lineHeight = 6; // Height of each line
const spacing = 68; // Spacing between lines
const maxRotation = Math.PI / 4; // Maximum rotation angle (45 degrees)

var counter = 0;
var speed = 0.03;

const lineOrigins = [];

canvas.style.width = sizeW + "px";
canvas.style.height = sizeH + "px";
var scale = window.devicePixelRatio;
canvas.width = Math.floor(sizeW * scale);
canvas.height = Math.floor(sizeH * scale);
ctx.scale(scale, scale);

// Calculate the number of rows based on the total lines and lines per row
const numRows = Math.ceil(totalLines / linesPerRow);

// Calculate the horizontal and vertical spacing
const horizontalSpacing = sizeW / (linesPerRow + 1);
const verticalSpacing = sizeH / (numRows + 1);

// Initialize the array of line starting points
for (let i = 0; i < totalLines; i++) {
    const row = Math.floor(i / linesPerRow);
    const col = i % linesPerRow;
    const x = horizontalSpacing * (col + 1);
    const y = verticalSpacing * (row + 1);
    lineOrigins.push({ x, y });
}

// Function to draw a line at a given origin and rotation angle
function drawLine(origin, rotationAngle) {
    ctx.save();
    ctx.translate(origin.x, origin.y);
    ctx.rotate(rotationAngle);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-spacing / 2, 0);
    ctx.lineTo(spacing / 2, 0);
    ctx.stroke();
    ctx.restore();
}

// Function to update and redraw the canvas
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    counter ++;
    dotX = 250 + Math.sin(counter*speed) * 100;
    dotY = 250 + Math.cos(counter*speed) * 50;

    // Calculate and apply rotation to lines based on mouse position
    for (let i = 0; i < totalLines; i++) {
        const angle = Math.atan2(
            dotY - lineOrigins[i].y,
            dotX - lineOrigins[i].x
        );
        drawLine(lineOrigins[i], angle);
    }
  
    drawDot(dotX, dotY);
    requestAnimationFrame(update);
}

function drawDot(vX, vY){
  ctx.beginPath();
  ctx.fillStyle = "#02786E";
  ctx.arc(vX, vY, 20, 0, 2 * Math.PI);
  ctx.fill();
}

// Listen for mousemove events
let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX - ((window.innerWidth/2) - (sizeW/2));
    mouseY = e.clientY - ((window.innerHeight/2) - (sizeH/2));
});

// Start the animation
update();