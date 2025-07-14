import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MessageCircle, Send } from "lucide-react";
import axios from "axios";

interface QuestionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuestionDialog = ({ open, onOpenChange }: QuestionDialogProps) => {
  const [question, setQuestion] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) {
      toast.error("Please enter your question");
      return;
    }

    if (!whatsappNumber.trim()) {
      toast.error("Please enter your WhatsApp number");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(
        "https://botapiclass8.mygreenhorn.in/champ//karma-soul-free-question-form",
        {
          question,
          whatsappNumber,
        }
      );

      toast.success(
        "Question submitted! We'll send your personalized answer to WhatsApp within 24 hours."
      );
      setQuestion("");
      setWhatsappNumber("");
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to submit question. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md mx-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-purple-900 flex items-center justify-center gap-2">
            <MessageCircle className="h-6 w-6 text-purple-600" />
            Ask Your First Question FREE
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="question"
              className="text-sm font-medium text-gray-700"
            >
              Your Question
            </Label>
            <Textarea
              id="question"
              placeholder="What would you like to know about your love life, career, or life purpose?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[100px] resize-none border-2 border-gray-200 focus:border-purple-400"
              maxLength={500}
            />
            <div className="text-xs text-gray-500 text-right">
              {question.length}/500 characters
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="whatsapp"
              className="text-sm font-medium text-gray-700"
            >
              WhatsApp Number
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="+91 9876543210"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="border-2 border-gray-200 focus:border-purple-400"
            />
            <div className="text-xs text-gray-500">
              Include country code (e.g., +91 for India)
            </div>
          </div>

          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <div className="flex items-start space-x-2 text-xs text-purple-700">
              <span>💜</span>
              <div>
                <p className="font-medium mb-1">What you'll get:</p>
                <ul className="space-y-1">
                  <li>• Personalized answer based on your KarmaArchetype</li>
                  <li>• Delivered to your WhatsApp within 24 hours</li>
                  <li>• Completely free, no hidden charges</li>
                </ul>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 text-base"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Send My Question
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionDialog;
