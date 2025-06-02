
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import PlaceAutosuggest from './PlaceAutosuggest';

interface FormData {
  name: string;
  email: string;
  otp: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

const WesternKarmaForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    otp: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const generateWesternKarmaMap = async () => {
    if (!formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth) {
      toast.error("Please fill in all birth details");
      return;
    }

    setLoading(true);
    
    // Simulate Western KarmaMap generation with astronomia calculations
    setTimeout(() => {
      setLoading(false);
      toast.success("🔮 Your Western KarmaArchetype has been calculated!");
      // Navigate to western report page with form data
      navigate('/western-report', { state: { formData, isWestern: true } });
    }, 3000);
  };

  return (
    <div className="w-full max-w-sm mx-auto px-2">
      <Card className="bg-white/95 backdrop-blur-sm border-purple-200 shadow-lg">
        <CardHeader className="text-center pb-4 px-4 pt-6">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
            {step === 1 && "🔮 Get Your Precise KarmaArchetype"}
            {step === 2 && "📧 Verify Your Email"}
            {step === 3 && "🗓️ Your Birth Details"}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4 px-4 pb-6">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg"
                />
              </div>
              
              <Button 
                onClick={handleSendOTP}
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-base font-semibold mt-6 rounded-lg touch-manipulation"
              >
                {loading ? "Sending..." : "Send OTP"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-center text-sm text-gray-600 mb-4 px-2 leading-relaxed">
                We've sent a verification code to <strong className="break-all text-purple-600">{formData.email}</strong>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-sm font-medium text-gray-700">Enter OTP</Label>
                <Input
                  id="otp"
                  placeholder="Enter 6-digit code"
                  value={formData.otp}
                  onChange={(e) => handleInputChange('otp', e.target.value)}
                  maxLength={6}
                  className="h-12 text-lg text-center tracking-widest border-2 border-gray-200 focus:border-purple-400 rounded-lg"
                />
              </div>
              
              <Button 
                onClick={handleVerifyOTP}
                className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-base font-semibold mt-6 rounded-lg touch-manipulation"
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
                  <Label htmlFor="date" className="text-sm font-medium text-gray-700">Date of Birth</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-medium text-gray-700">Time of Birth (IST - 24-hour format)</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.timeOfBirth}
                    onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
                    className="h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    ⏰ Please enter time in IST (Indian Standard Time)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="place" className="text-sm font-medium text-gray-700">Place of Birth</Label>
                  <PlaceAutosuggest
                    id="place"
                    placeholder="Start typing your city name..."
                    value={formData.placeOfBirth}
                    onChange={(value) => handleInputChange('placeOfBirth', value)}
                    className="h-12 text-base border-2 border-gray-200 focus:border-purple-400 rounded-lg pr-10"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    🌍 Exact location needed for precise astronomical calculations
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={generateWesternKarmaMap}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold h-14 text-base mt-6 rounded-lg touch-manipulation"
              >
                {loading ? "Calculating with Astronomia..." : "🔮 Calculate My Precise Archetype"}
              </Button>
              
              <div className="text-xs text-gray-500 text-center mt-4 px-2 leading-relaxed">
                Your data is secure and will only be used for precise astronomical calculations and archetype mapping.
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WesternKarmaForm;
