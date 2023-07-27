import { useLocation } from "react-router-dom"
function Company() {
    const queryP =new URLSearchParams(useLocation().search)
    //console.log(Company.name + " -> " + queryP.get("id"));
    return(
        <div>
        <div style={{textAlign:"center",padding:"3rem"}}>Company No : {queryP.get("id")}</div>
        </div>
        
    )
}

export default Company