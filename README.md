# React Client SDK: Loading Flag Values Without Connecting to LaunchDarkly

This repo contains examples on how to initialize the React Web SDK in "offline" mode. 

This allows you to bootstrap flags values from configuration and not from LaunchDarkly SaaS.

The following sections walk through how to set this up.

<br>

# **`index.js`**

In this example, the SDK is initialized in `index.js`.

To initialize the SDK in "offline" mode, set the `clientSideID` to an erroneous value, or omit `clientSideID` altogether from the configuration to force the SDK to use bootstrapped and/or fallback flag values.

You can also bootstrap your flag values using the `bootstrap` configuration option of the SDK:
``` js
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

(async () => {
    const LDProvider = await asyncWithLDProvider({
        clientSideID: 'your-client-side-id',
        options: {
            bootstrap: {
                'someFlag': 'someBootstrappedFlagValue'
            }
        }
    });
    // etc...
})();
```

See [these docs](https://launchdarkly.github.io/js-client-sdk/interfaces/_launchdarkly_js_client_sdk_.ldoptions.html#bootstrap) for a full list of configuration options.

<br>

# **`app.js`**

After the SDK initializes in "offline" mode, you specify the fallback values you want to use in the `.variation` method of `LDClient`:

``` js
const myFlag = LDClient.variation('myFlag', 'myValue');
```

`myValue` will be returned from this method until connectivity to LaunchDarkly has been restored (or properly configured).

You can also use the `useFlags` hook to access bootstrapped flag values:
``` js
import { useFlags } from 'launchdarkly-react-client-sdk';

function App() {
    const { someFlag } = useFlags();
    console.log(someFlag); // prints 'someBootstrappedFlagValue'
    
    return (
        // etc...
    );
}

export default App;
```

> **_Note_:** You can mix and match these approaches. You don't have to bootstrap every flag you want to test. Make it a combo, bootstrap some and use the `LDClient.variation()` technique for others. It's THAT easy! 

<br>

# **`LDConsumerExample.js`**
You can also use bootstrapped values and default variations with the `withLDConsumer` wrapper function.

See `LDConsumerExample.js` for details.

More info on `withLDConsumer` can be found [here](https://docs.launchdarkly.com/sdk/client-side/react/react-web#using-withldconsumer).