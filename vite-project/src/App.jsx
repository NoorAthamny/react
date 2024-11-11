import Increment from "./components/Increment";
import HideAndSeek from "./components/HideAndSeek";
import IncrementDecrement from "./components/IncrementDecrement";
import PlayPause from "./components/PlayPause";
import "./App.css";
import ImageHover from "./components/ImageHover";
import FromVal from "./components/FromVal";

function App() {
  return (
    <>
      <div>
        <Increment />
      </div>
      <div>
        <HideAndSeek />
      </div>
      <div>
        <IncrementDecrement />
      </div>
      <div>
        <PlayPause />
      </div>
      <div>
        <ImageHover />
      </div>
      <div>
        <FromVal />
      </div>
    </>
  );
}

export default App;
