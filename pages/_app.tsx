import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

export default App;
