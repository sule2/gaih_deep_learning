import './App.css';
import Header from './components/Header';
import User from './components/User';

const name = "Vesile";
const isLoggedIn = true;
const friends=[
  {
    id:1,
    name:"Aliye"
  },
  {
    id:2,
    name:"Veli"
  },
  {
    id:3,
    name:"Asya"
  },
  {
    id:4,
    name:"Kıraç"
  },
  {
    id:5,
    name:"Nil"
  }];

function App() {
  return(
    <div>
      <User name="Asiye" 
      surname="Sayan" 
      isLoggedIn={true} 
      age={19}
      friends={friends}/>
    </div>
  );
}

export default App;
