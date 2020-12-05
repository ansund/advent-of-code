const treeCounter = (stepper, data) => {
  let treeCount = 0;
  let pointer = 0;

  for (let row = 0; row < data.length; row += stepper[1]) {
    data[row].charAt(pointer);
    if (data[row].charAt(pointer) === "#") treeCount++;
    pointer += stepper[0];
    if (pointer >= data[row].length) pointer -= data[row].length;
  }
  return treeCount;
};

let pathFinder = (slopes, data) => {
  let paths = { multi: 1 };
  for (const i of slopes) {
    const treeCount = treeCounter(i, data);
    paths[i] = treeCount;
    paths["multi"] *= treeCount;
  }
  return paths;
};

const day3 = () => {
  const fs = require("fs");
  let data = fs.readFileSync("./src/day03/data.txt").toString().split("\n");

  let slopes1 = [[3, 1]];
  let slopes2 = [
    [1, 1],
    [5, 1],
    [3, 1],
    [7, 1],
    [1, 2],
  ];

  console.log("Day 3, part 1: ", pathFinder(slopes1, data)["multi"]);
  console.log("Day 3, part 2: ", pathFinder(slopes2, data)["multi"]);
};

day3();
