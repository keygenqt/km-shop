import logo from './logo.svg';
import './App.css';
import shared from "shared";

const greeting = new shared.com.keygenqt.shop.Greeting().greeting()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frontend - {greeting}
        </p>
      </header>
    </div>
  );
}

export default App;
