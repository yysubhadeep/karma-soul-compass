import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import PlaceAutosuggest from "./PlaceAutosuggest";
import { supabase } from "../utils/supabaseConfig";
import { Session } from "@supabase/supabase-js";
import axios from "axios";
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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    otp: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  const navigate = useNavigate();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSendOTP = async () => {
    if (!formData.name || !formData.email) {
      toast.error("Please enter your name and email");
      return;
    }

    setLoading(true);
    // Simulate OTP sending
    const resp = await sendOTP(formData.email);
  };

  // async function signInWithEmail(email: any) {
  //   const { error } = await supabase.auth.signInWithOtp({
  //     email, // for email-based OTP
  //     options: {
  //       shouldCreateUser: true, // auto-register user if not exists
  //     },
  //   });

  //   if (error) {
  //     console.error("OTP send error:", error.message);
  //   } else {
  //     console.log("OTP sent successfully. Check your email.");
  //     setTimeout(() => {
  //       setLoading(false);
  //       setStep(2);
  //       toast.success("OTP sent to your email!");
  //     }, 1000);
  //   }
  // }

  const sendOTP = async (email) => {
    try {
      await axios.post("https://botapiclass8.mygreenhorn.in/champ/send-otp", {
        email,
      });
      alert("OTP sent");
      setStep(2);
    } catch (err) {
      alert("Error sending OTP");
    }
  };

  // const handleVerifyOTP = async () => {
  //   if (!formData.otp) {
  //     toast.error("Please enter the OTP");
  //     return;
  //   }
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.verifyOtp({
  //     email: formData.email,
  //     token: formData.otp,
  //     type: "email",
  //   });

  //   setSession(session);
  //   localStorage.setItem("SUPABASE_SESSION", JSON.stringify(session));
  //   if (session) {
  //     console.log("Email verified successfully:", session);
  //     const uuid = session.user.id;
  //     console.log("User UUID:", uuid);
  //     const { data, error } = await supabase
  //       .from("Users")
  //       .insert([
  //         { fullname: formData.name, username: formData.email, user_id: uuid },
  //       ]);
  //     console.log("User data inserted:", data);
  //     if (error) {
  //       console.error("Error inserting user data:", error.message);
  //     }

  //     setStep(3);
  //     toast.success("Email verified successfully!");
  //   }

  //   if (error) {
  //     console.error("OTP verification error:", error.message);
  //     toast.error("Invalid OTP. Please try again.");
  //     return;
  //   }
  // };

  // const generateKarmaMap = async () => {
  //   if (
  //     !formData.dateOfBirth ||
  //     !formData.timeOfBirth ||
  //     !formData.placeOfBirth
  //   ) {
  //     toast.error("Please fill in all birth details");
  //     return;
  //   }

  //   setLoading(true);

  //   if (session) {
  //     console.log("Email verified successfully:", session);
  //     const { data, error } = await supabase.from("Users").insert([
  //       {
  //         dateOfBirth: formData.dateOfBirth,
  //         timeOfBirth: formData.timeOfBirth,
  //         placeOfBirth: formData.placeOfBirth,
  //       },
  //     ]);

  //     console.log("User data inserted:", data);
  //     if (error) {
  //       console.error("Error inserting user data:", error.message);
  //     }
  //   }

  //   // Simulate KarmaMap generation
  //   setTimeout(() => {
  //     setLoading(false);
  //     toast.success("🌟 Your KarmaArchetype has been generated!");
  //     // Navigate to report page with form data
  //     navigate("/report", { state: { formData } });
  //   }, 2000);
  // };

  const handleVerifyOTP = async () => {
    if (!formData.otp) {
      toast.error("Please enter the OTP");
      return;
    }

    let email = formData.email;
    let otp = formData.otp;

    try {
      const res = await axios.post(
        "https://botapiclass8.mygreenhorn.in/champ/verify-otp",
        { email, otp }
      );
      alert(res.data.message);
      setStep(3);
      toast.success("Email verified successfully!");
    } catch (err) {
      alert("OTP verification failed");
    }
  };

  const generateKarmaMap = async () => {
    if (
      !formData.dateOfBirth ||
      !formData.timeOfBirth ||
      !formData.placeOfBirth
    ) {
      toast.error("Please fill in all birth details");
      return;
    }

    setLoading(true);

    let fullname = formData.name;
    let email = formData.email;
    let DOB = formData.email;
    let TOB = formData.email;
    let POB = formData.email;

    try {
      const res = await axios
        .post(
          "https://botapiclass8.mygreenhorn.in/champ/karma-soul-submit-form",
          {
            fullname,
            email,
            DOB,
            TOB,
            POB,
          }
        )
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            toast.success("🌟 Your KarmaArchetype has been generated!");
            navigate("/report", { state: { formData } });
          }, 2000);
        });
    } catch (err) {}
  };

  // const generateKarmaMap = async () => {
  //   if (
  //     !formData.dateOfBirth ||
  //     !formData.timeOfBirth ||
  //     !formData.placeOfBirth
  //   ) {
  //     toast.error("Please fill in all birth details");
  //     return;
  //   }

  //   setLoading(true);
  //   const localSession = localStorage.getItem("SUPABASE_SESSION");
  //   console.log("localSession:", localSession);

  //   let parsedSession;
  //   try {
  //     parsedSession = JSON.parse(localSession);
  //   } catch (e) {
  //     console.error("Failed to parse local session:", e);
  //   }

  //   if (parsedSession?.access_token) {
  //     console.log("User is logged in:", parsedSession);

  //     const userId = parsedSession?.user?.id;
  //     console.log("User ID:", userId);

  //     if (!userId) {
  //       console.error("User ID not found in session.");
  //       return;
  //     }

  //     try {
  //       const { data, error } = await supabase
  //         .from("Users")
  //         .update({
  //           dateOfBirth: formData.dateOfBirth,
  //           timeOfBirth: formData.timeOfBirth,
  //           placeOfBirth: formData.placeOfBirth,
  //         })
  //         .eq("user_id", userId); // Make sure `user_id` is a string

  //       console.log("User data updated:", data);

  //       if (error) {
  //         console.error("Error updating user data:", error.message);
  //       }
  //     } catch (err) {
  //       console.error("Unexpected error during update:", err);
  //     }
  //   } else {
  //     console.log("No valid session found.");
  //   }

  //   setTimeout(() => {
  //     setLoading(false);
  //     toast.success("🌟 Your KarmaArchetype has been generated!");
  //     navigate("/report", { state: { formData } });
  //   }, 2000);
  // };

  return (
    <div className="w-full max-w-sm mx-auto px-2">
      <Card className="bg-white/95 backdrop-blur-sm border-orange-200 shadow-lg">
        <CardHeader className="text-center pb-4 px-4 pt-6">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
            {step === 1 && "🌟 Get Your Free KarmaArchetype"}
            {step === 2 && "📧 Verify Your Email"}
            {step === 3 && "🗓️ Your Birth Details"}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 px-4 pb-6">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg"
                />
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 h-12 text-base font-semibold mt-6 rounded-lg touch-manipulation"
              >
                {loading ? "Sending..." : "Send OTP"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-center text-sm text-gray-600 mb-4 px-2 leading-relaxed">
                We've sent a verification code to{" "}
                <strong className="break-all text-orange-600">
                  {formData.email}
                </strong>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="otp"
                  className="text-sm font-medium text-gray-700"
                >
                  Enter OTP
                </Label>
                <Input
                  id="otp"
                  placeholder="Enter 6-digit code"
                  value={formData.otp}
                  onChange={(e) => handleInputChange("otp", e.target.value)}
                  maxLength={6}
                  className="h-12 text-lg text-center tracking-widest border-2 border-gray-200 focus:border-orange-400 rounded-lg"
                />
              </div>

              <Button
                onClick={handleVerifyOTP}
                className="w-full bg-orange-600 hover:bg-orange-700 h-12 text-base font-semibold mt-6 rounded-lg touch-manipulation"
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
                  <Label
                    htmlFor="date"
                    className="text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="time"
                    className="text-sm font-medium text-gray-700"
                  >
                    Time of Birth (24-hour format)
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.timeOfBirth}
                    onChange={(e) =>
                      handleInputChange("timeOfBirth", e.target.value)
                    }
                    className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="place"
                    className="text-sm font-medium text-gray-700"
                  >
                    Place of Birth
                  </Label>
                  <PlaceAutosuggest
                    id="place"
                    placeholder="Start typing your city name..."
                    value={formData.placeOfBirth}
                    onChange={(value) =>
                      handleInputChange("placeOfBirth", value)
                    }
                    className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg pr-10"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    💡 Start typing to see suggestions for Indian cities
                  </p>
                </div>
              </div>

              <Button
                onClick={generateKarmaMap}
                //disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold h-14 text-base mt-6 rounded-lg touch-manipulation"
              >
                {loading
                  ? "Generating Your KarmaMap..."
                  : "🧭 Generate My KarmaArchetype"}
              </Button>

              <div className="text-xs text-gray-500 text-center mt-4 px-2 leading-relaxed">
                Your data is secure and will only be used to generate your
                personalized KarmaArchetype report.
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default KarmaForm;
