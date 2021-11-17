import {useState} from "react";

function App() {
  const [name, setName] = useState("Aisha");
  const [age, setAge] = useState(27);
  const [friends, setFriends] = useState(['Ali','Dali']);
  return (
    <div className="App">
      <h1>Hi {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Mahmud")}>Change Name</button>
      <button onClick={() => setAge(17)}>Change Age</button>

      <hr/>
      <br/>
      <h2>Friends</h2>
      {
        friends.map((friend,index) => <div key={index}>{friend}</div>)
      }
      <button onClick={() => setFriends([...friends,'Kris','Daniel'])}>Change Friends</button>

    </div>
  );
}

export default App;
