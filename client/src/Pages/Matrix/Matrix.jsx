import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { clusterContext, navKeyContext } from "../../context";
import { prefix } from "../../Components/Misc/api";
import { Dropdown, Popover, Whisper } from "rsuite";
import axios from "axios";
import "./Matrix.css";

const ROW = 22;
const COL = 50;

const lightStyle = {
  margin: "0.5rem",
  height: "10px",
  width: "10px",
  borderRadius: "0.1rem",
  float: "left",
  cursor: "pointer",
};

const Speaker = ({ status, location, id, ...props }) => {
  return (
    <Popover title="Info" {...props}>
      <p>{location}</p>
      <p>Status: {status}</p>
      <Link
        to={`/records/${id}`}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          color: "rgb(93, 248, 233)",
        }}
      >
        Records
      </Link>
    </Popover>
  );
};

const Light = ({ status, location, id }) => {
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
  return status === 3 ? (
    <div style={lightStyle} className={val} />
  ) : (
    <Whisper
      trigger="click"
      speaker={<Speaker status={status} location={location} id={id} />}
    >
      <div style={lightStyle} className={val} />
    </Whisper>
  );
};

const Matrix = () => {
  const { setNavbarKey } = useContext(navKeyContext);
  setNavbarKey("matrix");
  const { clusterList } = useContext(clusterContext);

  let initial = [];
  for (let i = 0; i < ROW; i++) {
    initial[i] = [];
    for (let j = 0; j < COL; j++) {
      initial[i][j] = [3, "", 0];
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
          if (lightData[i].i < ROW && lightData[i].j < COL) {
            copy[lightData[i].i][lightData[i].j] = [
              lightData[i].status,
              lightData[i].location,
              lightData[i]._id,
            ];
          }
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
        row.push(
          <Light
            status={matData[i][j][0]}
            location={matData[i][j][1]}
            id={matData[i][j][2]}
          />
        );
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
        <h4 style={{ margin: "0 1rem" }}>{selectedCluster}</h4>
      </div>

      {render}
    </div>
  );
};

export default Matrix;
