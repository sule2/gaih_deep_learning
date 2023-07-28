import { useState ,useEffect} from "react";
import { useLocation,useParams ,Link} from "react-router-dom"
import styles from './styles.module.css';
function Company() {
    const queryP =new URLSearchParams(useLocation().search)
    let {id} = useParams();
    const[loading,setLoading] = useState(true);
    const [company,setCompany] = useState({});
    //const{path,url} = useRoutes();
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res)=>res.json()) // used with fetch
      .then((res)=>{
        let data = res;//.data;
        setCompany(data["company"]); 
        })
      .catch((e)=>{console.log(e);})
      .finally(()=>setLoading(false));
  
      //console.log(res)
    },[id]);
    //console.log(Company.name + " -> " + queryP.get("id"));
    return(
        <div>
          {
            loading && <div style={{textAlign:"center",fontSize:"25pt"}}><strong >Loading...</strong></div>
          }
          <div hidden={loading}>
            <div style={{textAlign:"center",padding:"3rem"}}>Company Name : {company.name}</div>
            <code>{JSON.stringify(company)}</code>
            <br/>
            <hr/>
            <div className={styles.centeredDiv}>
              <Link to={`../${parseInt(id)+1}`} 
              style={{textDecoration:"none"}}
            >Next Company No-{'>'} {(parseInt(id)+1)}</Link>
            </div>
            
          </div>
        
        </div>
        
    )
}

export default Company