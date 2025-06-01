
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import AstrologyReport from './AstrologyReport';

interface FormData {
  name: string;
  email: string;
  otp: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

const KarmaForm = () => {
  const [step, setStep] = useState(1);
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    otp: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSendOTP = async () => {
    if (!formData.name || !formData.email) {
      toast.error("Please enter your name and email");
      return;
    }
    
    setLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      toast.success("OTP sent to your email!");
    }, 1000);
  };

  const handleVerifyOTP = () => {
    if (!formData.otp) {
      toast.error("Please enter the OTP");
      return;
    }
    
    setStep(3);
    toast.success("Email verified successfully!");
  };

  const generateKarmaMap = async () => {
    if (!formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth) {
      toast.error("Please fill in all birth details");
      return;
    }

    setLoading(true);
    
    // Simulate KarmaMap generation
    setTimeout(() => {
      setLoading(false);
      setShowReport(true);
      toast.success("🌟 Your KarmaArchetype has been generated!");
    }, 2000);
  };

  const handleBackToForm = () => {
    setShowReport(false);
    setStep(1);
    setFormData({
      name: '',
      email: '',
      otp: '',
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: ''
    });
  };

  // Show report if generated
  if (showReport) {
    return <AstrologyReport formData={formData} onBack={handleBackToForm} />;
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm border-orange-200">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">
          {step === 1 && "🌟 Get Your Free KarmaArchetype"}
          {step === 2 && "📧 Verify Your Email"}
          {step === 3 && "🗓️ Your Birth Details"}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {step === 1 && (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            
            <Button 
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              {loading ? "Sending..." : "Send OTP"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="text-center text-sm text-gray-600 mb-4">
              We've sent a verification code to <strong>{formData.email}</strong>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                placeholder="Enter 6-digit code"
                value={formData.otp}
                onChange={(e) => handleInputChange('otp', e.target.value)}
                maxLength={6}
              />
            </div>
            
            <Button 
              onClick={handleVerifyOTP}
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              Verify Email
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <div className="space-y-2">
              <Label htmlFor="date">Date of Birth</Label>
              <Input
                id="date"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Time of Birth (24-hour format)</Label>
              <Input
                id="time"
                type="time"
                value={formData.timeOfBirth}
                onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="place">Place of Birth</Label>
              <Input
                id="place"
                placeholder="City, State, Country"
                value={formData.placeOfBirth}
                onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
              />
            </div>
            
            <Button 
              onClick={generateKarmaMap}
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold"
            >
              {loading ? "Generating Your KarmaMap..." : "🧭 Generate My KarmaArchetype"}
            </Button>
            
            <div className="text-xs text-gray-500 text-center mt-2">
              Your data is secure and will only be used to generate your personalized KarmaArchetype report.
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default KarmaForm;
