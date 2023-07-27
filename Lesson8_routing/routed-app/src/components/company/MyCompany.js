import { useEffect, useState } from "react";
import { useLocation,Routes,Route,useParams,Link } from "react-router-dom";
import Company from "./Company";

function Companies() {
    const queryP =new URLSearchParams(useLocation().search)
    let {id } = useParams();
    //const [users,setUsers] = useState([]);
    const [companies,setCompanies] = useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>res.json()) // used with fetch
      .then((res)=>{
        let data = res;//.data;
        //setUsers(data); 
        setCompanies(data.map((item)=>item["company"])); 
        })
      .catch((e)=>{console.log(e);})
      .finally(()=>setLoading(false));
  
      //console.log(res)
    },[]);
    //console.log(MyCompany.name + " -> " +queryP.get("id"))
    return(
        <div style={{padding:"2rem"}}>
            {
                !loading &&
                <ul>
                    {
                        companies.map((item,i)=>
                        <li key={i}>
                            <Link to={""+(parseInt(i)+1)}>{item.name}</Link>
                        </li>
                        )
                    }
                </ul>
            }
        {/* id !== null ? 
            <Company/>
            : 
            <div style={{textAlign:"center"}}>
                My Company
            </div> */
             
        }
        
            
        <Routes>
            <Route path=":id" element={<Company />} />
        </Routes>
        </div>
    )
}

export default Companies