import '../styles/globals.css';
import '../styles/App.css';
import '../styles/index.css';
import Layout from '../components/Layout';
import ScrollToTop from '../components/ScrollToTop';
import ContactFloatingButton from '../components/ContactFloatingButton';
import { ModalProvider } from '../context/ModalContext';
import Head from 'next/head';
import ChatWidget from '@/components/ChatWidget';

function MyApp({ Component, pageProps }) {
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
