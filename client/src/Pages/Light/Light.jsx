import React from "react";

import {
  Sigma,
  RandomizeNodePositions,
  RelativeSize,
  LoadJSON,
} from "react-sigma";

const Light = () => {
  return (
    <Sigma
      settings={{
        batchEdgesDrawing: true,
        defaultLabelColor: "#777",
        defaultLabelSize: 8,
        defaultNodeColor: "#3388AA",
        drawEdgeLabels: false,
        drawEdges: true,
        hoverFontStyle: "text-size: 11",
        labelThreshold: 12,
      }}
      style={{
        height: "100%",
        maxWidth: "inherit",
      }}
    >
      <LoadJSON path="./Geo.json">
        <RelativeSize initialSize={15} />
        <RandomizeNodePositions />
      </LoadJSON>
    </Sigma>
  );
};
export default Light;
