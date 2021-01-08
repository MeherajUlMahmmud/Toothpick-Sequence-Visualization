const len = 63;
let minX;
let maxX;
let toothpickList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  minX = -width / 2;
  maxX = width / 2;

  toothpickList.push(new Toothpick(0, 0, 1));
  frameRate(2);
  // noLoop();
}

// function mousePressed() {
//   redraw();
// }

function draw() {
  console.log(toothpickList.length)

  background(255);

  translate(width / 2, height / 2);
  let factor = float(width) / (maxX - minX);
  scale(factor);

  for (var item of toothpickList) {
    item.show(factor);
    minX = min(item.ax, minX);
    maxX = max(item.ax, maxX);
  }

  let nextToothpicks = []

  for (var item of toothpickList) {
    if (item.newPick) {
      var nextA = item.createA(toothpickList);
      var nextB = item.createB(toothpickList);

      if (nextA != null) {
        nextToothpicks.push(nextA);
      }
      if (nextB != null) {
        nextToothpicks.push(nextB);
      }
    }
    item.newPick = false;
  }

  toothpickList = toothpickList.concat(nextToothpicks);
}