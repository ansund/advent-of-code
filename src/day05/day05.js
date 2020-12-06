const checkRow = (seatsCoordinates) => {
  let seats = [];
  let seatIds = [];
  let bigId = 0;
  seatsCoordinates.forEach((seat) => {
    let rowRange = [0, 127];
    let row;
    let columnRange = [0, 7];
    let column;

    for (let i = 0; i <= seat.length; i++) {
      if (seat[i] === "F") {
        // Lower half
        rowRange[1] -= Math.ceil((rowRange[1] - rowRange[0]) / 2);
        if (i === 6) row = rowRange[0];
      }
      if (seat[i] === "B") {
        rowRange[0] += Math.ceil((rowRange[1] - rowRange[0]) / 2);
        if (i === 6) row = rowRange[1];
      }
      if (seat[i] === "L") {
        // Lower half
        columnRange[1] -= Math.ceil((columnRange[1] - columnRange[0]) / 2);
        if (i === 9) column = columnRange[0];
      }
      if (seat[i] === "R") {
        // Upper half
        columnRange[0] += Math.ceil((columnRange[1] - columnRange[0]) / 2);
        if (i === 9) column = columnRange[1];
      }
    }

    let seatId = row * 8 + column;
    if (seatId > bigId) bigId = seatId;
    seatIds[seatId] = seatId;
  });

  console.log("Day 5, part 1: ", bigId);

  for (let i = 0; i < seatIds.length; i++)
    if (seatIds[i - 1] && seatIds[i + 1] && seatIds[i] === undefined)
      console.log("Day 5, part 2: ", seatIds[i + 1] - 1);
};

const day05 = () => {
  const fs = require("fs");
  let data = fs.readFileSync("./src/day05/data.txt").toString().split("\n");

  checkRow(data);
};

day05();
