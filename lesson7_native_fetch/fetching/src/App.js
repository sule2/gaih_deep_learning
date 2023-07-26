import './App.css';
import Users from './components/Users';
import { useEffect ,useState} from 'react';

function App() {
 return(
  <div className='App'>
    <h1 className='title'>{Users.name}</h1>
    <Users/>
  </div>
 )
}

export default App;
