import React from 'react';
import LPComponent from '../../components/LP';
import Head from 'next/head';

const LPPage = () => {
    return (
        <>
            <Head>
                <title>Best Birth Control Clinic in Thiruvananthapuram</title>
                <meta name="description" content="Certified Doctors and Clinics. 100% Legal, Confidential & Safe. Only Patient's Consent Required. Book Free Appointment." />
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
