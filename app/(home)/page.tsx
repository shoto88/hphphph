import Access from '@/components/services/Access';
import MainContent from '@/components/home/MainContent';
import MenuSection from '@/components/services/MenuSection';
import NewInformation from '@/components/home/NewInformation';
import React from 'react';
import { newInfoConfig } from '@/config/newInfo';
import { servicesConfig } from '@/config/services';
import MainVisualWithSidebar from '@/components/home/MainContent';
import ReservationAndAccess from '@/components/home/ReservationAndAccess';


const HomePage = () => {
  return (
    <>
      {/* <MainContent /> */}
      <MainVisualWithSidebar />
      <ReservationAndAccess />
      <NewInformation items={newInfoConfig.infoItem} />
      <MenuSection items={servicesConfig.serviceCategory} />
      <Access />
    </>
  );
};

export default HomePage;