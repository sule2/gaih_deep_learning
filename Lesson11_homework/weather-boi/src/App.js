import { WeatherProvider } from './components/context/WeatherContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from './components/Container';
import BasicWeek from './components/BasicWeek';
import BasicDay from './components/BasicDay';

function App() {
  return (
    <WeatherProvider>
      <BasicDay/>
    </WeatherProvider>
    
  );
}

export default App;
{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}