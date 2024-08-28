import React from 'react';
import Header from '@/components/Header';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
       <Head>
        <title>Swahilipotfm</title>
        <meta name="description" 
              content="SwahiliPot FM is your go-to online radio station 
              for the latest in Swahili culture, music, and news. 
              Broadcasting live from the heart of Mombasa, we connect you 
              with the rich heritage and vibrant sounds of the Swahili coast." 
        />
        <meta name="keywords" content="swahilipot radio, swahilipot fm, online radio, swahili radio" />
        <meta name="author" content="Swahilipothub" />
        <meta property="og:title" content="Swahilipot-fm" />
        <meta property="og:description" 
              content="SwahiliPot FM is your go-to online radio station 
              for the latest in Swahili culture, music, and news. 
              Broadcasting live from the heart of Mombasa, we connect you 
              with the rich heritage and vibrant sounds of the Swahili coast" 
        />
        <meta property="og:url" content="https://www.swahilipotfm.co.ke/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Swahilipotfm" />
        <meta name="tiktok:title" content="Swahilipotfm91.7" />
        <meta name="instagram:title" content="Swahilipotfm" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
