import React from "react";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-15.0, -60.0, 0],
                center: [20, -50],
                scale: 400

            }}
            style = {{width:"100%", height:"100%"}}
        >
            <Geographies
                geography="/features.json"
                fill="lightblue"
                stroke="#FFFFFF"
                strokeWidth={0.5}
                
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[ 28.338074,-15.422779]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "black",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                    
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
                    {"Lusaka, Zambia"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;
