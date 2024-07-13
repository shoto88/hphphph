import Access from '@/components/services/Access';
import MainContent from '@/components/home/MainContent';
import MenuSection from '@/components/services/MenuSection';
import NewInformation from '@/components/home/NewInformation';
import React from 'react';


const HomePage = () => {
  return (
    <>
      <MainContent />
      <NewInformation />
      <MenuSection />
      <Access />
    </>
  );
};

export default HomePage;