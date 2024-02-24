var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.translate(canvas.width / 2, canvas.height / 2)

var space = 50

var graphCordinatesY = roundNearestSpace(canvas.height / 2)
console.log("True Height : " + canvas.height)
console.log("graphCordinatesY : " + graphCordinatesY)

var graphCordinatesX = roundNearestSpace(canvas.width / 2)

console.log("True Width : " + canvas.width)
console.log("graphCordinatesX : " + graphCordinatesX)

for (let i = -graphCordinatesY; i < graphCordinatesY; i += space) {
    ctx.arc(0, i, 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.fillText("[0," + i + "]", 20, i - 10);
}

for (let i = -graphCordinatesX; i < graphCordinatesX; i += space) {
    ctx.arc(i, 0, 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.fillText("[0," + i + "]", i + 20, -10);
}

function roundNearestSpace(num) {
    return Math.round(num / space) * space
}
