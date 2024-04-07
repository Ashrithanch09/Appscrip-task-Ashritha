
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
                <meta name="description" content="Personal Care and Beauty: Pamper yourself with our collection of personal care and beauty products. 
        From skincare essentials to grooming tools, we provide premium products to help you look and feel your best." />
                <meta name="keywords" content="Personal Care and Beauty Products" />
            </Helmet>
            {children}
        </div>
    );
};

export default Layout;
