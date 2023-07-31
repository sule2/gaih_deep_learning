import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Button({/* children */}) {
    const /* data */ {theme,setTheme} = useContext(ThemeContext);
  return (
    <div>
        Active Theme: {/* data.theme */ theme} <span> </span>
        <button className='btn ' onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}> Theme Toggle </button>
        {/* children*/ }
    </div>
  )
}

export default Button