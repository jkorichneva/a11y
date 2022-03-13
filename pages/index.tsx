import React from 'react';
import Head from 'next/head';
import Landing from '../src/Landing/Landing';

function Index(): JSX.Element {
  return (
    <>
      <Head>
        <html lang="ru" />
        {/* eslint-disable-next-line max-len */}
        <title>Коричнева Яна - Сайт государственного музея изобразительных искусств имени А.С. Пушкина</title>
      </Head>
      <body>
        <Landing lang="RU" />
      </body>
    </>
  );
}

export default Index;
