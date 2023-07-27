import { useLocation,Routes,Route } from "react-router-dom";
import Company from "./Company";

function MyCompany() {
    const queryP =new URLSearchParams(useLocation().search)
    //console.log(MyCompany.name + " -> " +queryP.get("id"))
    return(
        <div style={{padding:"2rem"}}>
            {queryP.get("id") !== null ? 
            <Company/>
            : 
            <div style={{textAlign:"center"}}>
                My Company
            </div>
             
        }
            
        <Routes>
            <Route path=":id" element={<Company />} />
        </Routes>
        </div>
    )
}

export default MyCompany