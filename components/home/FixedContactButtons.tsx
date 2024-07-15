import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from 'lucide-react';

const FixedContactButtons: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col space-y-2 z-50">
      <Button className="bg-green-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 w-32 flex items-center justify-center">
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="ml-1">LINEで予約</span>
      </Button>
      <Button className="bg-red-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 w-32 flex items-center justify-center">
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="ml-1">お電話</span>
      </Button>
    </div>
  );
};

export default FixedContactButtons;