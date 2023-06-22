import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="apple-mobile-web-app-capable" content="yes" />

                    <link rel="shortcut icon" href="/adapt_logo_favi.png" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" media='print' />

                    <link rel='icon' href='favicon.ico' type='image/x-icon' />
                    <link href='https://fonts.googleapis.com/css?family=Jockey One' rel='stylesheet' media='print'></link>
                    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" media='print'></link>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"

                    />
                    <link href='https://fonts.googleapis.com/css?family=Jockey One' rel='stylesheet' media='print'></link>

                </Head>
                <body>

                    <Main />
                    <NextScript />

                </body>
            </Html>
        );
    }
}

export default MyDocument;
