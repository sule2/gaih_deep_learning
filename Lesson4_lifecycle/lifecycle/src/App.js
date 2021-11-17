import {useState} from "react";

function App() {
  const [name,setName] = useState("Fatih");
  return (
    <div className="App">
    <h1>{name}</h1>
    </div>
  );
}

export default App;
