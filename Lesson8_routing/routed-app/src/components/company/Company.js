import { useState ,useEffect} from "react";
import { useLocation,useParams } from "react-router-dom"
function Company() {
    const queryP =new URLSearchParams(useLocation().search)
    let {id} = useParams();
    const[loading,setLoading] = useState(true);
    const [company,setCompany] = useState({});
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/"+id)
      .then((res)=>res.json()) // used with fetch
      .then((res)=>{
        let data = res;//.data;
        setCompany(data["company"]); 
        })
      .catch((e)=>{console.log(e);})
      .finally(()=>setLoading(false));
  
      //console.log(res)
    },[]);
    //console.log(Company.name + " -> " + queryP.get("id"));
    return(
        <div>
        <div style={{textAlign:"center",padding:"3rem"}}>Company Name : {company.name}</div>
        </div>
        
    )
}

export default Company