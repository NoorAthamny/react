import { useState } from "react";
import "./App.css";
import data from "./assets/data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today </h3>
        <List people={people} />
        <button
          onClick={() => setPeople([])}
          type="button"
          className="btn btn-block"
        >
          Clear List
        </button>
      </section>
    </main>
  );
}

export default App;
