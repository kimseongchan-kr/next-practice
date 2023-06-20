import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>홈 | NodeBird</title>
      </Head>
      <AppLayout>Hello, Next!</AppLayout>
    </>
  );
};

export default Home;
