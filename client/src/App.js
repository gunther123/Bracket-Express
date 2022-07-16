import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import { getTournament } from './utils/getTournament';

function App() {
  return (
    <div className="App">
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
        <div className="d-grid gap-2">
        <Button onClick= {getTournament()} variant="primary" size="lg">
         Create Tournament Nerd
        </Button>
        <Button variant="secondary" size="lg">
         Get Top 8 Competitors
        </Button>
       </div>
      </header>
    </div>
  );
}

export default App;
