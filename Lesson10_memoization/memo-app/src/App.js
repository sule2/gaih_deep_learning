import {useMemo, useState} from 'react';
import './App.css';
import Header from './components/Header';

//const data = {name:"Jane Eyre"};

function App() {
  const [number,setNumber] = useState(0);
  const [text,setText] = useState('');

  const data = useMemo(()=>{
    return calculateObject();
    //return [{name: "Jane Eyre",number}]
  },[number]); // like useEffect when given params(number) change re-renders

  //const data = calculateObject();

  return (
    <div className="App">
      <Header data={data}/>
      <hr/>
      <h1>{number}</h1>
      <button onClick={()=> setNumber( number + 1 )}>+1</button>
      <input value={text} onChange={({target})=> setText(target.value)} />
    </div>
  );
}

function calculateObject(){
  console.log('Calculating...');
  for(let i=0;i<1000000;i++){}
  console.log('Calculated!')
  return {name : 'Mehmet'};
}

export default App;
