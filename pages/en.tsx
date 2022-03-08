import React from 'react';
import Head from 'next/head';
import Landing from '../src/Landing/Landing';

function Page(): JSX.Element {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>The Pushkin state museum of fine arts website</title>
      </Head>
      <body>
        <Landing lang="EN" />
      </body>
    </>
  );
}

export default Page;
