import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Header from './components/Header';
import {ThemeProvider} from './context/ThemeContext';
import {UserProvider} from './context/UserContext';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container/>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
