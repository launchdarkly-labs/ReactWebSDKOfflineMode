import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const LDConsumerExample = ({ flags, ldClient }) => {

    // the bootstrapped value of 'myFlag' is available here as well
    console.log(flags.myFlag);
    console.log(ldClient.variation('myFlag'));

    // you can combine the .variation approach with the bootstrap approach
    console.log(ldClient.variation('yetAnotherFlag', 'yetAnotherFallbackValue'));

    return (<></>);
};

export default withLDConsumer()(LDConsumerExample);