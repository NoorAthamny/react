import { useContext } from 'react';
import { ThemeContext } from './../context/ThemeContext';


const Menu = ({togglePage }) => {
  
    const { isDayMode, toggleTheme } = useContext(ThemeContext);

    const hanleToggle = () =>{
        toggleTheme();
        togglePage();
    }

  return (
    <nav style={{
         backgroundColor: isDayMode ? '#fff' : '#333',
         color: isDayMode ? '#000' : '#fff'
        
    }}>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>        
            <button onClick={hanleToggle} type="button">Make {isDayMode ? "Night" : "Day"}</button>
    </nav>
  )
}

export default Menu
