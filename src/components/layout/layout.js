
import React from 'react';
import Head from 'next/head';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Helmet>
                <meta name="description" content="Your description here" />
                <meta name="keywords" content="your, keywords, here" />
                
            </Helmet>
            {children}
        </div>
    );
};

export default Layout;
