import {useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [number,setNumber] = useState(0);
  return (
    <div className="App">
      <Header number={number <5 ? 0 : number}/>
      <hr/>
      <h1>{number}</h1>
      <button onClick={()=> setNumber( number + 1 )}>+1</button>
    </div>
  );
}

export default App;
