import Header from "./Header";
import Button from "./Button";
import { useContext } from "react";
import ThemeContext, { useTheme } from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {
    const {theme} = useTheme(); //useContext(ThemeContext);
  return (
    <div className={`app ${theme}`} /* style={{borderStyle:"solid",borderWidth:"3px",borderColor:theme,margin:"2rem"}} */>
        <Header/>
        <Button/>

        <br/>
        <hr/>
        <Profile/>
    </div>
  )
}

export default Container