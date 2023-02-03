import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const WorldMap = () => {
  const [count, setCount] = useState(0);
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapContainer.current || "",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    map.on("click", function() {
      setCount(count+ 1);
    });

    return () => {
      map.setTarget("");
    };
  }, []);

  return (
    <>
      <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />
      <p>Quantidade de clicks: {count}</p>
    </>
  );
};

export default WorldMap;
