import './css/fonts.css';
import React from 'react';
import type { AppProps } from 'next/app';

interface AppContext {
  theme: 'dark' | 'bright';
  language: 'en' | 'ru'
}

export const AppCtx = React.createContext<AppContext>({ theme: 'bright', language: 'en' });
const baseCtx: AppContext = {
  theme: 'bright',
  language: 'ru',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return <AppCtx.Provider value={baseCtx}><Component {...pageProps} /></AppCtx.Provider>;
}
