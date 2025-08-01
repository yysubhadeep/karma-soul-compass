
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CallToActionCard = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9930421623?text=Hi%2C%20I%20completed%20my%20KarmaArchetype%20report%20and%20would%20like%20a%20personal%20consultation.', '_blank');
  };

  return (
    <Card className="border-4 border-gradient-to-r from-green-400 to-green-500 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 mt-4">
      <CardContent className="text-center py-6 space-y-4">
        <div className="text-4xl mb-3">💬</div>
        <h3 className="text-lg font-bold text-green-900 mb-2">Need Personal Guidance?</h3>
        <p className="text-sm text-gray-800 leading-relaxed mb-4">
          Get personalized insights about your KarmaArchetype with our certified astrologer via WhatsApp.
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 sm:px-6 text-sm rounded-lg max-w-xs touch-manipulation"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">WhatsApp Consultation</span>
            <span className="sm:hidden">WhatsApp</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-xs text-green-700 font-medium mt-3">
          <div className="flex flex-col items-center space-y-1">
            <span>💚</span>
            <span>Love</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span>🎯</span>
            <span>Career</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span>🌟</span>
            <span>Purpose</span>
          </div>
        </div>
        
        <div className="text-xs text-green-600 mt-3 bg-green-100 rounded-lg p-2">
          📱 Contact: 9930421623
        </div>
      </CardContent>
    </Card>
  );
};

export default CallToActionCard;
