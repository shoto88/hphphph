import React from 'react';
import NewInformation from '@/components/NewInformation';
import MenuSection from '@/components/MenuSection';
import Access from '@/components/Access';
import Footer from '@/components/Footer';
import { navConfig } from '@/config/nav';
import Header from '@/components/Header';
import MainNav from '@/components/main-nav';
import MainContent from '@/components/MainContent';

const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <MainNav items={navConfig.mainNav} />
      <MainContent />
      <NewInformation />
      <MenuSection />
      <Access />
      <Footer />
    </div>
  );
};

export default HomePage;