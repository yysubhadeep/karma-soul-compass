
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9930421623?text=Hi%2C%20I%20completed%20my%20KarmaArchetype%20report%20and%20would%20like%20a%20personal%20consultation.', '_blank');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-xs">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-lg shadow-lg border-2 border-white relative animate-in slide-in-from-bottom-2 duration-500">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-700 transition-colors"
        >
          <X className="h-3 w-3" />
        </button>
        
        <div className="space-y-3">
          <p className="text-sm font-medium leading-relaxed">
            Need personal guidance on your report?
          </p>
          <p className="text-xs opacity-90 leading-relaxed">
            Chat with our certified astrologer for personalized insights about your KarmaArchetype.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="sm"
            className="w-full bg-white text-green-600 hover:bg-gray-100 text-xs font-semibold py-2 px-3 h-8"
          >
            <MessageCircle className="h-3 w-3 mr-2" />
            <span className="hidden xs:inline">WhatsApp Consultation</span>
            <span className="xs:hidden">WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
