const part1 = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      const multi = data[i] + data[j] == 2020 ? data[i] * data[j] : null;
      if (multi) {
        console.log("Day 1, part 1: ", multi);
        return multi;
      }
    }
  }
};

const part2 = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      for (let k = 0; k < data.length; k++) {
        const multi =
          data[i] + data[j] + data[k] == 2020
            ? data[i] * data[j] * data[k]
            : null;
        if (multi) {
          console.log("Day 1, part 2: ", multi);
          return multi;
        }
      }
    }
  }
};

const day1 = () => {
  const fs = require("fs");
  let data = fs.readFileSync("./src/day01/data.txt").toString().split("\n");
  for (i in data) {
    data[i] = parseInt(data[i], 10);
  }

  part1(data);
  part2(data);
};

day1();
