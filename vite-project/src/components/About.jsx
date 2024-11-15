import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {

  const { isDayMode } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: isDayMode ? '#e0f7fa' : '#263238',
      color: isDayMode ? '#000' : '#fff'
    }} className="about">
      <h1>The About Page</h1>
    </div>
  )
}

export default About
