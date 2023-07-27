import { useLocation,Routes,Route } from "react-router-dom";
import Sponsor from "./Sponsor";

function MySponsor() {
    const queryP =new URLSearchParams(useLocation().search)
    //console.log(MyCompany.name + " -> " +queryP.get("id"))
    return(
        <div style={{padding:"2rem"}}>
            {queryP.get("id") !== null ? 
            <Sponsor/>
            : 
            <div style={{textAlign:"center"}}>
                My Sponsor
            </div>
        }
            
        <Routes>
            <Route path=":id" element={<Sponsor />} />
        </Routes>
        </div>
    )
}

export default MySponsor