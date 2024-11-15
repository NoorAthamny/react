
import "./App.css";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [isPage1, setIsPage1] = useState(true);

  const togglePage = () => {
    setIsPage1(prevState => !prevState); 
  };

  return (
    <ThemeProvider>
      <Menu togglePage={togglePage} isPage1={isPage1} />
      {isPage1 ? <About/> : <Home/>}
      </ThemeProvider>
   
  );
}

export default App;
