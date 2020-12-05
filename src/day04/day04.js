const formatData = (data) => {
  let passports = {};
  let passport = {};
  let passportcount = 1;

  for (let i = 0; i <= data.length; i++) {
    if (data[i] != "" && data[i] != undefined) {
      let rowData = data[i].split(" ");
      for (let j = 0; j < rowData.length; j++) {
        let splitLine = rowData[j].split(":");
        passport[splitLine[0]] = splitLine[1];
      }
    } else {
      passports[passportcount] = passport;
      passport = {};
      passportcount++;
    }
  }
  return passports;
};

const checkPassportsPart1 = (passports) => {
  let validpassports = {};
  for (const key in passports) {
    const passport = passports[key];
    validPassport = true;
    ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].forEach((field) => {
      if (!passport.hasOwnProperty(field)) validPassport = false;
    });
    if (validPassport) validpassports[key] = passport;
  }
  return validpassports;
};

const checkPassportsPart2 = (passports) => {
  let validpassports = {};
  for (const key in passports) {
    const passport = passports[key];
    let byr = false;
    let iyr = false;
    let eyr = false;
    let hgt = false;
    let hcl = false;
    let ecl = false;
    let pid = false;

    if (1920 <= passport.byr && 2002 >= passport.byr) byr = true;

    if (2010 <= passport.iyr && 2020 >= passport.iyr) iyr = true;

    if (2020 <= passport.eyr && 2030 >= passport.eyr) eyr = true;

    if (/^#(?:[0-9a-f]{6})$/.test(passport.hcl)) hcl = true;

    if (/^(?:[0-9]{9})$/.test(passport.pid)) pid = true;

    if (passport.hasOwnProperty("hgt") && passport.hgt.includes("cm"))
      if (150 <= passport.hgt.slice(0, -2) && 193 >= passport.hgt.slice(0, -2))
        hgt = true;

    if (passport.hasOwnProperty("hgt") && passport.hgt.includes("in"))
      if (59 <= passport.hgt.slice(0, -2) && 76 >= passport.hgt.slice(0, -2))
        hgt = true;

    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].forEach((color) => {
      if (color === passport.ecl) ecl = true;
    });

    if (byr && iyr && eyr && hgt && hcl && ecl && pid) {
      validpassports[key] = passport;
    }
  }
  return validpassports;
};

const day4 = () => {
  const fs = require("fs");
  let data = fs.readFileSync("./src/day04/data.txt").toString().split("\n");
  const passports = formatData(data);

  console.log(
    "Day 4, part 1: ",
    Object.keys(checkPassportsPart1(passports)).length
  );
  console.log(
    "Day 4, part 2: ",
    Object.keys(checkPassportsPart2(passports)).length
  );
};

day4();
