import React, { useEffect, useState } from "react";
import { prefix } from "../../Components/Misc/api";
import axios from "axios";
import "./Matrix.css";

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
  let initial = [];
  for (let i = 0; i < 23; i++) {
    initial[i] = [];
    for (let j = 0; j < 50; j++) {
      initial[i][j] = 3;
    }
  }

  const [matData, setMatData] = useState(initial);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${prefix}/lights`);
      let copy = [...matData];

      const lightData = data.data;
      for (let i = 0; i < lightData.length; i++) {
        copy[lightData[i].i][lightData[i].j] = lightData[i].status;
      }
      setMatData(copy);
    };
    getData();
  }, [matData]);

  let render = [];
  if (matData.length) {
    let row = [];
    for (let i = 0; i < matData.length; i++) {
      for (let j = 0; j < matData[i].length; j++) {
        row.push(<Light status={matData[i][j]} />);
      }
    }
    render.push(<div className="row-main">{row}</div>);
  }

  return <div className="col-main">{render}</div>;
};

export default Matrix;
