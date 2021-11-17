import {useState} from 'react'

function InputExample() {
    const [user,setUser] = useState({name: "", surname: ""});
    const onChangeInput = (e) =>{
        console.log(e.target.name);
        setUser({...user, [e.target.name]: e.target.value});
    };
    return (
        <div>
            Enter name: <br/>
            <input name="name" value={user.name} onChange={onChangeInput}/>
            <br/>
            {user.name}
            <br/>
            Enter surname: <br/>
            <input name="surname" value={user.surname} onChange={onChangeInput}/>
            <br/>
            {user.surname}
        </div>
    )
}

export default InputExample
