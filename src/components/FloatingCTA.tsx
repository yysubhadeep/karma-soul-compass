
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Eye, X } from "lucide-react";
import QuestionDialog from './QuestionDialog';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  if (!isVisible || isDismissed) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 max-w-xs">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg shadow-lg border-2 border-white relative animate-in slide-in-from-bottom-2 duration-500">
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-700 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
          
          <div className="space-y-3">
            <p className="text-sm font-medium leading-relaxed">
              Your report unlocked the map — now meet the guide.
            </p>
            <p className="text-xs opacity-90 leading-relaxed">
              Chat with our certified karma life-guide for 15 minutes — free, real, and eye-opening.
            </p>
            <Button
              onClick={() => setIsDialogOpen(true)}
              size="sm"
              className="w-full bg-white text-purple-600 hover:bg-gray-100 text-xs font-semibold py-2 px-3 h-8"
            >
              <Eye className="h-3 w-3 mr-2" />
              Claim My Free 15-min Reading
            </Button>
          </div>
        </div>
      </div>

      <QuestionDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
};

export default FloatingCTA;
