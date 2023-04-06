import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  // ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      className="w-full h-full"
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
    >
      <Geographies
        geography="/features.json"
        // fill="#2c065D"
        fill="gray"
        stroke="#fdba74"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fdba74">
          {"Paris"}
        </text>
      </Annotation>
      <Annotation
        subject={[21.01178, 52.22077]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#fff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Warsaw"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
