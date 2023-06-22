import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.dark.css'; // or import "antd/dist/antd.css";

class MyApp extends App {
    render() {
        const { Component } = this.props;
        return (
            <>
                <Head>
                    <meta property="og:locale" content="en_US" />
                </Head>
                <Component />
            </>
        );
    }
}

export default MyApp;
