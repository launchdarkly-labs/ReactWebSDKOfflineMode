
import { createRoot } from 'react-dom/client';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import App from './App';
import './index.css';

(async () => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  const LDProvider = await asyncWithLDProvider({

    //clientSideID: process.env.REACT_APP_LD_CLIENT_SIDE_ID, // uncomment for LaunchDarkly-connected development
    //clientSideID: process.env.REACT_APP_BROKEN_LD_CLIENT_SIDE_ID, // uncomment for 'offline' development

    // you can omit clientSideID altogether to achieve the same effect as using a 'broken' clientSideID for working 'offline'

    options: {
      bootstrap: {
        'myFlag': 'myBootstrappedFlagValue' // myFlag will have this value if LD can't be reached when SDK is initialized ('offline' development)
      }
    }
  });

  root.render(
    <LDProvider>
      <App />
    </LDProvider>);
})();