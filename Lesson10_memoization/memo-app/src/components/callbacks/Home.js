import {useMemo, useState,useCallback} from 'react';
import Header from './Header';

//const data = {name:"Jane Eyre"};

function Home() {
  const [number,setNumber] = useState(0);
  const [text,setText] = useState('');

  const increment = useCallback(()=>{
    setNumber((prevState)=>prevState +1); // increment on number without re-render nor params
  },[]);

  return (
    <div className="App">
      <Header increment={/* ()=>setNumber(number+1) */ increment}/>
      <hr/>
      <h1>{number}</h1>
      
      <input value={text} onChange={({target})=> setText(target.value)} />
    </div>
  );
}
export default Home;
