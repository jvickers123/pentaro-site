import { useEffect } from 'react';

// import '../src/styles/main.scss';
import '../styles/main.scss';
import { ChakraProvider } from '@chakra-ui/react';

import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { handleAcceptCookie } from '../helpers/GA-Helper';

import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);

  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieConsent
        enableDeclineButton
        style={{ background: '#082233' }}
        buttonStyle={{ color: '#52c4b1', background: '#fff' }}
        declineButtonStyle={{ background: '#fff', color: '#52c4b1' }}
        onAccept={handleAcceptCookie}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </ChakraProvider>
  );
};

export default App;
