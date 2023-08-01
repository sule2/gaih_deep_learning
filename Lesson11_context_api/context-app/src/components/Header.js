import { useTheme } from '../context/ThemeContext'

function Header() {
    const {theme,setTheme} = useTheme();
  return (
    <div>
        Active Theme from Header: {theme} <br/><hr/>
    </div>
  )
}

export default Header