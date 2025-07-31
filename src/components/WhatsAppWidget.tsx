import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9930421623', '_blank');
  };

  return (
    <div className="fixed bottom-6 left-4 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:block text-sm font-medium whitespace-nowrap">
          Click here and consult via WhatsApp
        </span>
        <span className="block sm:hidden text-xs font-medium">
          WhatsApp
        </span>
      </button>
    </div>
  );
};

export default WhatsAppWidget;