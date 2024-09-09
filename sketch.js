let cells = [];
let w = 10;
let y = 0;
function setup() {
  createCanvas(410, 410);
  let total = width / w;
  // randomly select initial state of cells
  for (let i = 0; i < total; i++) {
    // make all cells initial state 0 as in elementary wolfram CA 
    cells[i] = 0;
  }
  // only middle cell has state of 1
  cells[floor(total/2)] = 1;
  background(255);
}

function draw() {
  
  for (let i = 0; i < cells.length; i++) {
    let x = i * w;
    stroke(0);
    fill(255 - cells[i] * 255);
    square(x, y, w)
  }
  y += w;
  // generate next gen
  let nextGen = [];
  // hard code edges state 
  nextGen[0] = cells[0];
  nextGen[cells.length-1] = cells[cells.length - 1];

  for (let i = 1; i < cells.length - 1; i++) {
    let left = cells[i - 1];
    let middle = cells[i];
    let right = cells[i + 1];

    let newState = calculateState(left, middle, right);
    nextGen[i] = newState;
  }
  cells = nextGen;
}

// calculate new cell state based on arbitrary rules
function calculateState(a, b, c) {
  if (a === 1 && b === 1 && c === 1) return 1;
  if (a === 1 && b === 1 && c === 0) return 0;
  if (a === 1 && b === 0 && c === 1) return 1;
  if (a === 1 && b === 0 && c === 0) return 1;
  if (a === 0 && b === 1 && c === 1) return 0;
  if (a === 0 && b === 1 && c === 0) return 0;
  if (a === 0 && b === 0 && c === 1) return 1;
  if (a === 0 && b === 0 && c === 0) return 0;
}