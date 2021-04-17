import React, { useEffect, useState, useContext } from "react";
import { clusterContext } from "../../clusterContext";
import { prefix } from "../../Components/Misc/api";
import { Dropdown } from "rsuite";
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
  const { clusterList } = useContext(clusterContext);

  let initial = [];
  for (let i = 0; i < 22; i++) {
    initial[i] = [];
    for (let j = 0; j < 50; j++) {
      initial[i][j] = 3;
    }
  }

  const [matData, setMatData] = useState(initial);
  const [selectedCluster, setSelectedCluster] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (selectedCluster) {
        const data = await axios.get(`${prefix}/lights/${selectedCluster}`);
        let copy = JSON.parse(JSON.stringify(initial));

        const lightData = data.data;
        for (let i = 0; i < lightData.length; i++) {
          copy[lightData[i].i][lightData[i].j] = lightData[i].status;
        }
        setMatData(copy);
      }
    };
    getData();
    // eslint-disable-next-line
  }, [selectedCluster]);

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

  return (
    <div className="col-main">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Dropdown
          title="Select Cluster"
          onSelect={(eventKey) => {
            setSelectedCluster(eventKey);
          }}
        >
          {clusterList
            ? clusterList.map((name) => (
                <Dropdown.Item eventKey={name}>{name}</Dropdown.Item>
              ))
            : null}
        </Dropdown>
        <h4>{selectedCluster}</h4>
      </div>

      {render}
    </div>
  );
};

export default Matrix;
