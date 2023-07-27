import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import NewRouter from './components/navbar/NewRouter';

function App() {
  return (
    <div className="main">
      <NewRouter/>
      {/* <div className='bar-container' >
          <Link className='bar-item' to="home">HOME</Link>
          <Link className='bar-item' to="about/*" >ABOUT</Link>
          <Link className='bar-item' to="contact/*" >CONTACT</Link>
    </div> */}
    </div>
  );
}

export default App;
