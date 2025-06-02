
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import QuestionDialog from './QuestionDialog';

const CallToActionCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="border-4 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 mt-4">
        <CardContent className="text-center py-6 space-y-4">
          <div className="text-4xl mb-3">✨</div>
          <h3 className="text-lg font-bold text-purple-900 mb-2">Want Deeper Insights?</h3>
          <p className="text-sm text-gray-800 leading-relaxed mb-4">
            Get personalized answers about your love life, career path, and spiritual growth.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={() => setIsDialogOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 text-sm rounded-lg max-w-xs"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Ask Your First Question FREE
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-xs text-purple-700 font-medium mt-3">
            <div className="flex flex-col items-center space-y-1">
              <span>💜</span>
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
        </CardContent>
      </Card>

      <QuestionDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
};

export default CallToActionCard;
