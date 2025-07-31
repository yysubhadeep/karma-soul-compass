import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9930421623', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3 border-2 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
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