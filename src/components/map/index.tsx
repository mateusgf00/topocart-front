import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "./style.css"

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
      setCount((count)=> count + 1);
    });

    return () => {
      map.setTarget("");
    };
  }, []);

  function resettingCounter() {
    setCount(0);
  }

  return (
    <>
      <div ref={mapContainer} className="map" />
      <p className="counter">Quantidade de clicks: {count}</p>
      <button onClick={resettingCounter} className="button-resseting-counter">Zerar contador</button>
    </>
  );
};

export default WorldMap;
