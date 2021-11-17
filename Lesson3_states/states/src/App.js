import {useState} from "react";

function App() {
  const [name, setName] = useState("Aisha");
  const [age, setAge] = useState(27);
  const [friends, setFriends] = useState(['Ali','Dali']);
  const [address, setAddress] = useState({title: "İstanbul",zip: "34000"});
  
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
      <button onClick={() => setFriends([...friends,'Kris','Daniel'])}>Add Friends</button>

      <hr/><br/>
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br/>

      <button onClick={() => setAddress({...address, title: "Sakarya"})}>Change Address</button>{/*...address for update on the smae address*/}
    </div>
  );
}

export default App;
