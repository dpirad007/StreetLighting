import React from "react";
import "./Matrix.css";

const genData = () => {
  let data = [];
  for (let i = 0; i < 23; i++) {
    let row = [];
    for (let j = 0; j < 50; j++) {
      if (j < 26) {
        row.push({
          i: i,
          j: j,
          status: 1,
        });
      } else {
        row.push({
          i: i,
          j: j,
          status: j % 3,
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
  } else {
    val = "light-on";
  }
  return <div style={lightStyle} className={val} />;
};

const Matrix = () => {
  const grid = genData();

  let render = [];
  for (let i = 0; i < 23; i++) {
    let row = [];
    for (let j = 0; j < 50; j++) {
      row.push(<Light status={grid[i][j].status} />);
    }
    render.push(<div className="row-main">{row}</div>);
  }

  return <div className="col-main">{render}</div>;
};

export default Matrix;
