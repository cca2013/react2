import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

		<p> 
		<a
          className="App-link"
          href="http:\\vresto.eu"
          target="_blank"
          rel="noopener noreferrer"
          >
		Konstantinos P. Anastasiadis</a> 
		</p>
		<p>Οι γονείς μου είναι ο Παναγιώτης(1973) και η Ζωή Αναστασιάδου(2015)</p>
		<p>
		 <a
          className="App-link"
          href="https://github/cca2013/react2"
          target="_blank"
          rel="noopener noreferrer"
        >
		React - cd mysecondreact</a>
		
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
    </div>
  );
}

export default App;
