import { useTheme } from "../context/ThemeContext";

function Button({/* children */}) {
    //const /* data */ {theme,setTheme} = useContext(ThemeContext);
    const{theme,setTheme} = useTheme();
  return (
    <div>
        Active Theme: {/* data.theme */ theme} <span> </span>
        <button className='btn ' onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}> Theme Toggle </button>
        {/* children*/ }
    </div>
  )
}

export default Button