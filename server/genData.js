require("./db/mongoose");
const Light = require("./model/light");

const ROW = 23;
const COL = 50;
let data = [];
for (let i = 0; i < ROW; i++) {
  let row = [];
  for (let j = 0; j < COL; j++) {
    if (i === 0 && j < 37) {
      row.push({
        location: `Thane,rd${i}${j}`,
        watts: Math.floor(Math.random() * 10),
        i: i,
        j: j,
        status: 2,
      });
    } else if (i === 1 && j === 34) {
      row.push({
        location: `Thane,rd${i}${j}`,
        watts: Math.floor(Math.random() * 10),
        i: i,
        j: j,
        status: 3,
      });
    } else if (i === 2 && j < 35) {
      row.push({
        location: `Thane,rd${i}${j})}`,
        watts: Math.floor(Math.random() * 10),
        i: i,
        j: j,
        status: 2,
      });
    } else if (j === 36 || j === 34) {
      row.push({
        location: `Thane,rd${i}${j}`,
        watts: Math.floor(Math.random() * 10),
        i: i,
        j: j,
        status: 2,
      });
    } else {
      row.push({
        location: `Thane,rd${i}${j}`,
        watts: Math.floor(Math.random() * 10),
        i: i,
        j: j,
        status: 3,
      });
    }
  }
  data.push(row);
}

let tot = [];
for (let i = 0; i < ROW; i++) {
  for (let j = 0; j < COL; j++) {
    const run = async () => {
      console.log(i, j);
      const light = new Light(data[i][j]);
      try {
        await light.save();
      } catch (e) {
        console.log(e);
      }
    };
    run();
    // tot.push(data[i][j]);
  }
}

console.log("done");
