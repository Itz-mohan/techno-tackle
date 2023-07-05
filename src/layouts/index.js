import React from 'react';

//Components
import Header from '../components/Header';
import Banner from '../components/Banner';
import BestSeller from '../components/BestSeller';
import ShopByConcern from '../components/ShopByConcern';

export default function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <BestSeller />
      <ShopByConcern />
    </div>
  );
}
