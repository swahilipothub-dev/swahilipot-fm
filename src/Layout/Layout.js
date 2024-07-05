import React from 'react';
import Header from '../components/header'
import FrequencyDetails from '../components/FrequencyDetails'; 

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
