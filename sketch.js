const cells = [1, 0, 0, 1, 0, 1, 0, 1, 1, 0];
let w = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (let i = 0; i < cells.length; i++) {
    let x = i * w;
    stroke(0);
    fill(255 - cells[i] * 255);
    square(x, 0, w)
  }

  let nextGen = [];
  for (let i = 1; i < cells.length - 1; i++) {
    let left = cells[i - 1];
    let middle = cells[i];
    let right = cells[i + 1];

    let newState = calculateState(left, middle, right);
    nextGen.push(newCell);
  }
  cells = nextGen;
};
