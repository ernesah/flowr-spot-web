import React from 'react';
import Header from './header/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
