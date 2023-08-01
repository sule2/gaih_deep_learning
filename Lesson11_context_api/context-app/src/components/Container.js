import Header from "./Header";
import Button from "./Button";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {
    const {theme} = useContext(ThemeContext);
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