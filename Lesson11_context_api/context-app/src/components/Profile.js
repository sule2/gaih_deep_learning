import {useContext, useState} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user,setUser} = useContext(UserContext);
    const[loading,setLoading] = useState(false);
    const handleLogin = () =>{
        setLoading(true);
        setTimeout(() => {
            setUser({
                id: 1,
                username:'sheila',
                password: '123',
                bio: 'likes cats and coffee'
            });
            setLoading(false);
        },1500)
    }
    const handleLogout = () =>{
        setLoading(true);
        setTimeout(() => {
            setUser(null);
            setLoading(false);
        },1500)
    }
  return (
    <div> 
        {
            user !== null ?
            <section>
                <h1>Profile</h1>
                <code>{JSON.stringify(user)}</code><br/>
                <button onClick={handleLogout}>{loading ? 'Loading...' :'Log Out'}</button>
            </section>
            :
            <button onClick={handleLogin}>{loading ? 'Loading...' :'Log In'}</button>
        }
        
    </div>
  )
}

export default Profile