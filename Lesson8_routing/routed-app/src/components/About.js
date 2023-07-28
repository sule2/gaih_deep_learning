import { Routes,Route,Link } from "react-router-dom";
import Companies from "./company/MyCompany";
import MySponsor from "./sponsor/MySponsor";

function About() {
  
    return(
        <div style={{padding:"3rem"}}>
            {/* About */}
            
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
            <strong style={{lineHeight:"3rem",fontSize:"auto",textAlign:"center"}}>About sponsors and such details click  --{'>'} </strong>
            <nav style={{lineHeight:"3rem", textAlign:"center"}}>
                <Link style={{borderStyle:"groove",borderColor:"crimson",borderWidth:"1px",borderRadius:"30%",textDecoration:"none",padding:"1rem"}} to="../companies">Company Info</Link>
            </nav>
            <nav style={{lineHeight:"3rem", textAlign:"center"}}>
                <Link style={{borderStyle:"groove",borderColor:"crimson",borderWidth:"1px",borderRadius:"30%",textDecoration:"none",padding:"1rem"}} to="sponsor">Sponsor Info</Link>
            </nav>
        </div>
      <Routes>
        <Route path="sponsor" element={<MySponsor />} />
        {/* <Route path="../companies" element={<Companies />} /> */}
      </Routes>
        </div>
    )
}

export default About