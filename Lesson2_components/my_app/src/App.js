import './App.css';
import Header from './components/Header';

function App() {
  return(
    <div>
      <Header />
      <p className="xyz">Lorem ipsum dolor</p>

      <label htmlFor = "myInput">
        Name:
        <input id="myInput"/>
      </label>
    </div>
  );
}

export default App;
