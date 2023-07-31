import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {
    const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div>
        Active Theme from Header: {theme} <br/><hr/>
    </div>
  )
}

export default Header