import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { navConfig } from '@/config/nav';
import MainNav from '../common/MainNav';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      <MainNav items={navConfig.mainNav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;