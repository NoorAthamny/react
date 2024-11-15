import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
const Home = () => {
    const { isDayMode } = useContext(ThemeContext);
  return (
    <div style={{
         backgroundColor: isDayMode ? '#fce4ec' : '#1c1c1c',
      color: isDayMode ? '#000' : '#fff'
    }} className="home">
      <h1>The Home Page</h1>
    </div>
  )
}

export default Home
