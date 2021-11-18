import {useState,useEffect} from "react";

function App() {
  const [number,setNumber] = useState(0);
  const [name,setName] = useState("Mete");

  useEffect(() => {
    console.log("Component mount edildi.");
  },[]);//dependency array is empty it'll catch the mounting moment

  
  useEffect(() => {
    console.log("Number state güncellendi.");//effect
  },[number]);
  
  useEffect(() => {
    console.log("Name state güncellendi.");//effect
  },[name]);
  
  return (
    <div className="App">
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>
    <h1>{name}</h1>
    <button onClick={() => setName("Elijah")}>Click</button>
    </div>
  );
}

export default App;
