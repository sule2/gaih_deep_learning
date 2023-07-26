import { useState , useEffect} from "react";

function Users() {
    const[users,setUsers] = useState([]);
    const[dataState,setDataState] = useState(0);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>res.json())
      .then((data)=>{
        if(data.length >0)
        { setUsers(data); 
          setDataState(1);
        }else{
          setDataState(0);
        }
        })
      .catch((e)=>{console.log(e); setDataState(-1)});
      //.finally(()=>setDataState(1));
  
      //console.log(res)
    },[]);
    if(dataState === 0) {
      return(
        <div className="alert alert-warning" role="alert" style={{fontSize:"30pt"}}>
            <strong>No users has found!</strong>
        </div>
      )
    }else if(dataState === 1 ){
      return(
        <ol>
          {
          users.map((user,i)=>
          <li key={i}>
            <table className='table'>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company Name</th>
                    <th>Company Catch Phrase</th>
                    <th>Company Bs.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.suite + " / " + user.address.street + " / " + user.address.city + " / " + user.address.zipcode + " Geo: " + user.address.geo}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
                    <td>{user.company.catchPhrase}</td>
                    <td>{user.company.bs}</td>
                </tr>
              </tbody>
            </table>
          </li>
          )
        }
        </ol>
      )
    }else{
      return(
        <div className="alert alert-danger" role="alert" style={{fontSize:"30pt"}}>
            <strong>An error occured!</strong>
        </div>
      )
    }
    
}

export default Users