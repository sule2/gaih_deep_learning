import './App.css';
import Header from './components/Header';

const name = "Vesile";
const isLoggedIn = true;

function App() {
  return(
    <div>
      <h1>{isLoggedIn ? `She is ${name}`: "Giriş yapmadınız"}</h1> {/*AltGr + virgül */}
    </div>
  );
}

export default App;
