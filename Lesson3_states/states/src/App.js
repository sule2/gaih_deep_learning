import {useState} from "react";

function App() {
  const [name, setName] = useState("Aisha");
  const [age, setAge] = useState(27);
  return (
    <div className="App">
      <h1>Hi {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Mahmud")}>Change Name</button>
      <button onClick={() => setAge(17)}>Change Age</button>
    </div>
  );
}

export default App;
