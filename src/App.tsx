import "./App.css";
import WorldMap from "./components/map";

export default function App() {
  let clicks = 0;

  function count() {
    clicks++;
    console.log(clicks);
  }

  return (
    <>
      <WorldMap />
    </>
  );
}
