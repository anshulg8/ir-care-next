import React from 'react';
import LPComponent from '../../components/LP';
import Head from 'next/head';

const LPPage = () => {
    return (
        <>
            <Head>
                <title>Treat Enlarged Prostate Without Surgery in Mumbai</title>
                <meta name="description" content="Certified Doctors and Clinics. 100% Legal, Confidential & Safe. Book Free Appointment." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LPComponent />
        </>
    );
};

// This tells Next.js to not use the default Layout for this page
LPPage.getLayout = function getLayout(page) {
    return page;
};

export default LPPage;
