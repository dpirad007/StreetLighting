import React from "react";
import "./Matrix.css";

const ROW = 23;
const COL = 50;

const genData = () => {
  let data = [];
  for (let i = 0; i < ROW; i++) {
    let row = [];
    for (let j = 0; j < COL; j++) {
      if (i === 10 && j > 15 && j < 35) {
        row.push({
          i: i,
          j: j,
          status: 0,
        });
      } else {
        row.push({
          i: i,
          j: j,
          status: 3,
        });
      }
    }
    data.push(row);
  }
  return data;
};

const lightStyle = {
  margin: "0.5rem",
  height: "10px",
  width: "10px",
  borderRadius: "0.1rem",
  float: "left",
  cursor: "pointer",
};

const Light = ({ status = 1 }) => {
  let val = null;
  if (status === 0) {
    val = "light-off";
  } else if (status === 1) {
    val = "light-dim";
  } else if (status === 2) {
    val = "light-on";
  } else {
    val = "light-disable";
  }
  return <div style={lightStyle} className={val} />;
};

const Matrix = () => {
  const grid = genData();

  let render = [];
  for (let i = 0; i < ROW; i++) {
    let row = [];
    for (let j = 0; j < COL; j++) {
      row.push(<Light status={grid[i][j].status} />);
    }
    render.push(<div className="row-main">{row}</div>);
  }

  return <div className="col-main">{render}</div>;
};

export default Matrix;
