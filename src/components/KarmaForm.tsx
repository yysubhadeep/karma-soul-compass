
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import MobileAstrologyReport from './MobileAstrologyReport';

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
    return <MobileAstrologyReport formData={formData} onBack={handleBackToForm} />;
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="bg-white/95 backdrop-blur-sm border-orange-200 shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
            {step === 1 && "🌟 Get Your Free KarmaArchetype"}
            {step === 2 && "📧 Verify Your Email"}
            {step === 3 && "🗓️ Your Birth Details"}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4 px-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="h-11 text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-11 text-base"
                />
              </div>
              
              <Button 
                onClick={handleSendOTP}
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 h-11 text-base font-semibold mt-6"
              >
                {loading ? "Sending..." : "Send OTP"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-center text-sm text-gray-600 mb-4 px-2">
                We've sent a verification code to <strong className="break-all">{formData.email}</strong>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-sm font-medium">Enter OTP</Label>
                <Input
                  id="otp"
                  placeholder="Enter 6-digit code"
                  value={formData.otp}
                  onChange={(e) => handleInputChange('otp', e.target.value)}
                  maxLength={6}
                  className="h-11 text-base text-center tracking-widest"
                />
              </div>
              
              <Button 
                onClick={handleVerifyOTP}
                className="w-full bg-orange-600 hover:bg-orange-700 h-11 text-base font-semibold mt-6"
              >
                Verify Email
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}

          {step === 3 && (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-medium">Date of Birth</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="h-11 text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-medium">Time of Birth (24-hour format)</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.timeOfBirth}
                    onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
                    className="h-11 text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="place" className="text-sm font-medium">Place of Birth</Label>
                  <Input
                    id="place"
                    placeholder="City, State, Country"
                    value={formData.placeOfBirth}
                    onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                    className="h-11 text-base"
                  />
                </div>
              </div>
              
              <Button 
                onClick={generateKarmaMap}
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold h-12 text-base mt-6"
              >
                {loading ? "Generating Your KarmaMap..." : "🧭 Generate My KarmaArchetype"}
              </Button>
              
              <div className="text-xs text-gray-500 text-center mt-3 px-2 leading-relaxed">
                Your data is secure and will only be used to generate your personalized KarmaArchetype report.
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default KarmaForm;
