import './App.css';
import Header from './components/Header';
import User from './components/User';

const name = "Vesile";
const isLoggedIn = true;

function App() {
  return(
    <div>
      <User name="Asiye" surname="Sayan" isLoggedIn={false} />
    </div>
  );
}

export default App;
