import { useLDClient, useFlags } from 'launchdarkly-react-client-sdk';
import LDConsumerExample from './LDConsumerExample.js'
import './App.css';
import logo from './logo.svg';

function App() {
  const LDCLient = useLDClient();

  // 'defaultValue' only returned in offline/local development mode, otherwise actual value from LD returned
  const flagWithDefaultValue = LDCLient.variation('yourFlag', 'defaultValue');
  console.log(flagWithDefaultValue);

  // 'myFlag' will have the value you set in the bootstrap configuration
  const { myFlag } = useFlags();
  console.log(myFlag);

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
      </header>
      <LDConsumerExample />
    </div>
  );
}

export default App;
