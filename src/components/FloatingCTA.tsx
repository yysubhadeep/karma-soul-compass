
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
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
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg shadow-lg border-2 border-white relative animate-in slide-in-from-bottom-2 duration-500">
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-gray-700 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
          
          <div className="flex items-start space-x-2">
            <MessageCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">
                Have specific questions about your report?
              </p>
              <Button
                onClick={() => setIsDialogOpen(true)}
                size="sm"
                className="bg-white text-purple-600 hover:bg-gray-100 text-xs font-semibold py-1 px-3 h-7"
              >
                Ask FREE Question
              </Button>
            </div>
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
