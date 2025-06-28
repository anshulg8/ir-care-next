import '../styles/globals.css';
import '../styles/App.css';
import '../styles/index.css';
import Layout from '../components/Layout';
import ScrollToTop from '../components/ScrollToTop';
import ContactFloatingButton from '../components/ContactFloatingButton';
import { ModalProvider } from '../context/ModalContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <ScrollToTop />
                <ContactFloatingButton />
                <ModalProvider>
                    <Component {...pageProps} />
                </ModalProvider>
            </Layout>
        </>
    );
}

export default MyApp;
