import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
         
        
      </header>
    </div>
  );
}

export default App;
