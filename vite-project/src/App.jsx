import Increment from "./components/Increment";
import HideAndSeek from "./components/HideAndSeek";
import IncrementDecrement from "./components/IncrementDecrement";

import "./App.css";

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
    </>
  );
}

export default App;
