import React, { useContext } from "react";
import { navKeyContext } from "../../clusterContext";
import ReactFlow from "react-flow-renderer";
import "./Light.css";

const elements = [
  {
    id: "1",
    data: { label: "ID 1" },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    data: { label: "ID 2" },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",

    data: { label: "ID 3" },
    position: { x: 250, y: 250 },
  },

  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const style = {
  height: "100%",
  width: "100%",
};

const Light = () => {
  const { setNavbarKey } = useContext(navKeyContext);
  setNavbarKey("light");
  return (
    <div style={style}>
      <ReactFlow elements={elements} />
    </div>
  );
};
export default Light;
