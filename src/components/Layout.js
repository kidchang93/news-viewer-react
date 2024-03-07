import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main role="main">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
