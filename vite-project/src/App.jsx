// import Increment from "./components/Increment";
// import HideAndSeek from "./components/HideAndSeek";
// import IncrementDecrement from "./components/IncrementDecrement";
// import PlayPause from "./components/PlayPause";
// import ImageHover from "./components/ImageHover";
import "./App.css";
// import FromVal from "./components/FromVal";
import FavoriteColor from "./components/FavoriteColor";
import BoxAnimation from "./components/BoxAnimation";
import Spiner from "./components/Spiner";
function App() {
  return (
    <>
      {/* <div>
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
      </div> */}
      <div>
        <FavoriteColor />
      </div>

      <BoxAnimation size="100px" />
      <BoxAnimation size="200px" />
      <BoxAnimation size="300px" />

      <div>
        <Spiner />
      </div>
    </>
  );
}

export default App;
