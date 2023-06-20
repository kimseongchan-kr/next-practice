import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>Signup Page</AppLayout>
    </>
  );
};

export default Profile;
