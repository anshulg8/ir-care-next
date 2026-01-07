import '../styles/globals.css';
import '../styles/App.css';
import '../styles/index.css';
import Layout from '../components/Layout';
import ScrollToTop from '../components/ScrollToTop';
import ContactFloatingButton from '../components/ContactFloatingButton';
import { ModalProvider } from '../context/ModalContext';
import Head from 'next/head';
import ChatWidget from '@/components/ChatWidget';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    /* ----------------------------------------
    GLOBAL GCLID CAPTURE (RUNS ON ALL PAGES)
    ---------------------------------------- */
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const params = new URLSearchParams(window.location.search);

        const gclid = params.get('gclid');
        const gbraid = params.get('gbraid');
        const wbraid = params.get('wbraid');

        if (gclid) {
            localStorage.setItem('gclid', gclid);
        }

        // Optional but recommended (iOS / Safari)
        if (gbraid) {
            localStorage.setItem('gbraid', gbraid);
        }

        if (wbraid) {
            localStorage.setItem('wbraid', wbraid);
        }
    }, []);

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => (
        <Layout>
            <ChatWidget />
            <ScrollToTop />
            {/* <ContactFloatingButton /> */}
            <ModalProvider>
                {page}
            </ModalProvider>
        </Layout>
    ));

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {getLayout(<Component {...pageProps} />)}
        </>
    );
}

export default MyApp;
