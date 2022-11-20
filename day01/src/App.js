import logo from './logo.svg';
import './App.css';
import Title from './components/title';

function App() {
  return (
    <div className="App">
      <Title/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello class!
        </p>
      </header>
    </div>
  );
}

export default App;
