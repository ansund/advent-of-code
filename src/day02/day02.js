const day2 = () => {
  let validPasswords1 = 0;
  let validPasswords2 = 0;

  const fs = require("fs");
  let data = fs.readFileSync("./src/day02/data.txt").toString().split("\n");
  let list = [];
  for (let i = 0; i < data.length; i++) {
    let splitLine = data[i].split(":");
    list[i] = splitLine;
  }

  for (const [key, value] of list) {
    let numbers = key.match(/^\d+|\d+\b|\d+(?=\w)/g);
    let min = numbers[0];
    let max = numbers[1];
    let char = key.slice(-1);

    // part 1
    let charsCount = 0;
    for (const i of value) if (i === char) charsCount++;
    if (min <= charsCount && charsCount <= max) validPasswords1++;

    // part 2
    let onlyOne = 0;
    if (value.charAt(min) === char) onlyOne++;
    if (value.charAt(max) === char) onlyOne++;
    if (onlyOne === 1) validPasswords2++;
  }

  console.log("Day 2, part 1: ", validPasswords1);
  console.log("Day 2, part 1: ", validPasswords2);
};

day2();
