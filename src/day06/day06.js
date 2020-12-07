const formatData = (data) => {
  let groups = [];
  let group = [];
  let groupCount = 0;
  let arrayCount = 0;
  let groupsArray = [];

  let groupString = "";

  for (let i = 0; i <= data.length; i++) {
    if (data[i] != "" && data[i] != undefined) {
      let rowData = data[i];
      group[arrayCount] = rowData;
      arrayCount++;
      groupString += data[i];
    } else {
      groupsArray[groupCount] = groupString;
      groups[groupCount] = group;
      groupString = "";
      group = [];
      groupCount++;
      arrayCount = 0;
    }
  }
  return [groupsArray, groups];
};

const part1 = (groups) => {
  uniqueYes = 0;
  groups.forEach((group) => {
    let lol = new Set(group);
    uniqueYes += String.prototype.concat(...new Set(group)).length;
  });
  return uniqueYes;
};

const part2 = (groups) => {
  let allYes = 0;
  groups.forEach((group) => {
    let yeses = {};
    group.forEach((person) => {
      [...person].forEach((yes) => {
        if (yeses[yes] === undefined) yeses[yes] = 1;
        else yeses[yes] += 1;
      });
    });

    Object.keys(yeses).forEach((yesCount) => {
      if (yeses[yesCount] === group.length) allYes += 1;
    });
  });
  return allYes;
};

const day6 = () => {
  const fs = require("fs");
  let data = fs.readFileSync("./src/day06/data.txt").toString().split("\n");
  const groups = formatData(data);

  console.log("Day 6, part 1: ", part1(groups[0]));
  console.log("Day 6, part 2: ", part2(groups[1]));
};

day6();
