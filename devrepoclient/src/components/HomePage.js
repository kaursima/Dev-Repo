import React from 'react';
import HomeHeader from './HomeHeader';
import Developers from './Developers';
import HomeFooter from './HomeFooter';
import "../index.css";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <Developers />
      <HomeFooter />

    </>
  );
}

export default HomePage;