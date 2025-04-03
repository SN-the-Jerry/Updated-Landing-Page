// pages/_app.js
import { GTMProvider } from 'next-gtm';

function MyApp({ Component, pageProps }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PG8P7JBS'; // Fallback ID
  
  return (
    <GTMProvider gtmId={gtmId}>
      <Component {...pageProps} />
    </GTMProvider>
  );
}

export default MyApp;