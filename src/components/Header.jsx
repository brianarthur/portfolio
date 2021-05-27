import React from 'react';
import Head from 'next/head'
import * as metaConstants from '../lib/meta-constants';

const Header = ({ page, id }) => {
    const url = metaConstants.url(page, id);

    return (
        <Head key="main-head">
            <title>{metaConstants.pageTitle}</title>
            <link rel="icon" href="/logo.svg" />

            <meta charSet="UTF-8" />
            <meta name="description" content={metaConstants.description} />
            <meta name="author" content="Brian Arthur" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Twitter */}
            <meta name="twitter:card" content={metaConstants.twitterCard} />
            <meta property="twitter:domain" content={metaConstants.domain} />
            <meta property="twitter:url" content={url} />
            <meta name="twitter:title" content={metaConstants.pageTitle} />
            <meta name="twitter:description" content={metaConstants.description} />
            <meta name="twitter:image" content={metaConstants.image} />

            {/* Open Graph */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content={metaConstants.ogType} />
            <meta property="og:title" content={metaConstants.pageTitle} />
            <meta property="og:description" content={metaConstants.description} />
            <meta property="og:image" content={metaConstants.image} />

        </Head>
    );
}

export default Header;