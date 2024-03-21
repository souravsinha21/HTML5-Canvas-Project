const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var scissor = document.getElementById("scissor");
// const imgs = new Array(10).fill(img);

const center = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

class Scissor {
  constructor({
    position = { x: 0, y: 0 },
    width = 50,
    height = 50,
    velocity = { x: 0, y: 0 },
  }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
  }

  draw() {
    ctx.drawImage(
      scissor,
      this.position.x,
      this.position.y,
      this.height,
      this.width
    );
  }
  moveObject() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

const scissor1 = new Scissor({
  position: {
    x: center.x - 250,
    y: center.y,
  },
  velocity: { x: 10, y: 0 },
});

const scissor2 = new Scissor({
  position: {
    x: center.x + 250,
    y: center.y,
  },
  velocity: { x: -20, y: 0 },
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  scissor1.draw();
  scissor2.draw();
  scissor1.moveObject();
  scissor2.moveObject();

  var distX = Math.abs(scissor1.position.x - scissor2.position.x-scissor2.width/2);
  var distY = Math.abs(scissor1.position.y - scissor2.position.y-scissor2.height/2);
  console.log(distX,distY);

  // if (scissor1.position.x == scissor2.position.x) {
  //   scissor1.velocity.x = -scissor1.velocity.x;
  //   scissor2.velocity.x = -scissor2.velocity.x;
  // }
  // if (scissor1.position.x> innerWidth || scissor1.position.x < 0) {
  //   scissor1.velocity.x = -scissor1.velocity.x;
  // }
  // if (scissor2.position.x > innerWidth || scissor2.position.x < 0) {
  //   scissor2.velocity.x = -scissor2.velocity.x;
  // }

  requestAnimationFrame(animate);
}

animate();
