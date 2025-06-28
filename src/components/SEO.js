// components/SEO.js
import Head from 'next/head';

const SEO = ({
    title,
    description,
    url = 'https://refer.mydocsy.com/',
    image = '',
    type = 'website',
    twitterHandle = '',
}) => {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            {/* <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} /> */}

            {/* Twitter */}
            {/* <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content={twitterHandle} /> */}
        </Head>
    );
};

export default SEO;
