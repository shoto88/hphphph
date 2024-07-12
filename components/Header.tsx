import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => (
  <header className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-red-500 rounded-full" />
      <div>
        <div className="font-bold">（医）清涼会</div>
        <div className="text-sm">大濠パーククリニック</div>
      </div>
    </div>
    <div className="flex space-x-2">
      <Button className="bg-green-500 text-white">Lineで予約</Button>
      <Button className="bg-red-500 text-white">お電話</Button>
      <Button className="bg-black text-white">Instagram</Button>
      <Button className="bg-black text-white">Facebook</Button>
      <Button className="bg-black text-white">YouTube</Button>
    </div>
  </header>
);

export default Header;