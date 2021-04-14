import React from "react";

import {
  Sigma,
  RandomizeNodePositions,
  RelativeSize,
  LoadJSON,
  NOverlap,
  DragNodes,
} from "react-sigma";

const Light = () => {
  return (
    <Sigma
      settings={{
        batchEdgesDrawing: true,
        defaultLabelSize: 8,
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
        <RandomizeNodePositions />
        <NOverlap
          duration={3000}
          easing="quadraticInOut"
          gridSize={20}
          maxIterations={100}
          nodeMargin={10}
          scaleNodes={4}
          speed={10}
        />
        <RelativeSize initialSize={15} />

        <DragNodes
          onDrag={function noRefCheck() {}}
          onDragend={function noRefCheck() {}}
          onDrop={function noRefCheck() {}}
          onStartdrag={function noRefCheck() {}}
        />
      </LoadJSON>
    </Sigma>
  );
};
export default Light;
