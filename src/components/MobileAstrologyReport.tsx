
import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Star, Brain, Target, Heart, Zap, Shield, Lightbulb, Briefcase, MessageCircle, Compass, Eye } from "lucide-react";
import { getArchetypeData } from '@/data/archetypeData';
import { generatePsychologicalProfile } from '@/utils/psychologicalProfile';
import { testArchetypeGeneration } from '@/utils/archetypeTestRunner';
import PersonalInfoCard from './PersonalInfoCard';
import ArchetypeCard from './ArchetypeCard';
import CallToActionCard from './CallToActionCard';
import SelfFutureContent from './SelfFutureContent';
import FloatingCTA from './FloatingCTA';

interface FormData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface MobileAstrologyReportProps {
  formData: FormData;
  onBack: () => void;
}

const MobileAstrologyReport = ({ formData, onBack }: MobileAstrologyReportProps) => {
  const [activeTab, setActiveTab] = useState("profile");

  // Run archetype test when component mounts
  useEffect(() => {
    console.log("Running archetype generation test...");
    testArchetypeGeneration();
  }, []);

  // Memoize the profile calculation to prevent re-calculation on every render
  const profile = useMemo(() => {
    console.log("=== CALCULATING PROFILE FOR:", formData.name, "===");
    const calculatedProfile = generatePsychologicalProfile(formData);
    console.log("=== FINAL PROFILE RESULT ===");
    console.log("Primary archetype:", calculatedProfile.archetype);
    console.log("Secondary archetype:", calculatedProfile.secondaryArchetype);
    return calculatedProfile;
  }, [formData.dateOfBirth, formData.timeOfBirth, formData.placeOfBirth]);

  const archetypeData = useMemo(() => getArchetypeData(profile.archetype), [profile.archetype]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Mobile Header - Enhanced */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200 px-3 sm:px-4 lg:px-6 py-3 shadow-sm">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Button 
            onClick={onBack}
            size="sm"
            className="bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold px-3 py-2.5 rounded-lg touch-manipulation transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Go back to form"
          >
            <ArrowLeft className="h-4 w-4 mr-1" aria-hidden="true" />
            <span className="hidden xs:inline">Back</span>
          </Button>
          <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 truncate px-2 text-center">
            KarmaArchetype Report
          </h1>
          <div className="w-16 sm:w-20"></div>
        </div>
      </header>

      <main className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        {/* Personal Info Card */}
        <PersonalInfoCard formData={formData} />

        {/* Enhanced Tabs for Mobile Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-white/70 rounded-lg shadow-sm backdrop-blur-sm">
            <TabsTrigger 
              value="profile" 
              className="text-xs py-2.5 px-1 rounded-md touch-manipulation transition-all duration-200 min-h-[48px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
              aria-label="View personality profile"
            >
              <div className="flex flex-col items-center space-y-1">
                <Star className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span className="text-xs">Profile</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="selffuture" 
              className="text-xs py-2.5 px-1 rounded-md touch-manipulation transition-all duration-200 min-h-[48px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
              aria-label="View self development and future insights"
            >
              <div className="flex flex-col items-center space-y-1">
                <Compass className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span className="text-xs">Self + Future</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="vedic" 
              className="text-xs py-2.5 px-1 rounded-md touch-manipulation transition-all duration-200 min-h-[48px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
              aria-label="View vedic astrology insights"
            >
              <div className="flex flex-col items-center space-y-1">
                <Brain className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span className="text-xs">Vedic</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="reading" 
              className="text-xs py-2.5 px-1 rounded-md touch-manipulation transition-all duration-200 min-h-[48px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
              aria-label="Get personal reading"
            >
              <div className="flex flex-col items-center space-y-1">
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                <span className="text-xs">Reading</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Your Profile Tab - Consolidated Content */}
          <TabsContent value="profile" className="space-y-4 sm:space-y-6 mt-4" role="tabpanel" aria-labelledby="profile-tab">
            {/* Main Archetype */}
            <section aria-labelledby="archetype-section">
              <ArchetypeCard 
                archetype={profile.archetype} 
                secondaryArchetype={profile.secondaryArchetype} 
              />
            </section>

            {/* Life Purpose */}
            <section aria-labelledby="life-purpose-section">
              <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm">
                <CardHeader className="pb-3 px-4 sm:px-6 pt-4 sm:pt-6">
                  <CardTitle id="life-purpose-section" className="flex items-center space-x-2 text-base sm:text-lg lg:text-xl">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" aria-hidden="true" />
                    <span>Your Life Purpose</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-gray-800 leading-relaxed text-sm sm:text-base">{archetypeData.lifePurpose}</p>
                </CardContent>
              </Card>
            </section>

            {/* Core Patterns */}
            <Card className="border-orange-200">
              <CardHeader className="pb-3 px-4 pt-4">
                <CardTitle className="text-base sm:text-lg">🧠 Core Psychological Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-4 pb-4">
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Core Personality Type</h4>
                  <p className="text-base sm:text-lg font-bold text-orange-600">{profile.corePersonality.name}</p>
                  <p className="text-xs text-gray-600">{profile.corePersonality.trait} • {profile.corePersonality.tendency}</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Primary Motivation</h4>
                  <p className="text-base sm:text-lg font-bold text-orange-600">{profile.primaryDriver}</p>
                  <p className="text-xs text-gray-600">What drives your decisions</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Energy Type</h4>
                  <p className="text-base sm:text-lg font-bold text-orange-600">{profile.energyType}</p>
                  <p className="text-xs text-gray-600">Your natural energy rhythm</p>
                </div>
              </CardContent>
            </Card>

            {/* Strengths & Growth */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-3 px-4 pt-4">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <span>Your Natural Superpowers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-gray-700 leading-relaxed text-sm mb-3">{archetypeData.strengths}</p>
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-xs text-green-700 font-medium">
                    🌟 Amplified by your {profile.emotionalStyle} emotional processing
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Growth Areas */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader className="pb-3 px-4 pt-4">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
                  <span>Your Growth Edges</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-gray-700 leading-relaxed text-sm mb-3">{archetypeData.growthAreas}</p>
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-xs text-yellow-700 font-medium">
                    💪 Use your {profile.cognitiveStyle.toLowerCase()} approach to transform challenges
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Career Paths */}
            <Card className="border-orange-200">
              <CardHeader className="pb-3 px-4 pt-4">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                  <span>Aligned Career Paths</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="grid gap-2 mb-4">
                  {archetypeData.careerPaths.slice(0, 4).map((career, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-100 to-red-100 p-3 rounded-lg text-center">
                      <p className="font-medium text-gray-800 text-sm">{career}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-gray-600 text-center text-xs">
                    These paths align with your {profile.archetype} energy and {profile.corePersonality.name} drive
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action after Profile */}
            <CallToActionCard />
          </TabsContent>

          {/* SELF + FUTURE Tab - Use the SelfFutureContent component */}
          <TabsContent value="selffuture" className="space-y-4 mt-4">
            <SelfFutureContent archetype={profile.archetype} />
          </TabsContent>

          {/* Vedic Insights Tab */}
          <TabsContent value="vedic" className="space-y-4 mt-4">
            {/* Vedic Insights */}
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader className="pb-3 px-4 pt-4">
                <CardTitle className="text-base sm:text-lg">🕉️ Ancient Wisdom Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 pb-4">
                <div className="bg-white/60 rounded-lg p-3">
                  <p className="text-amber-900 font-medium text-sm leading-relaxed">
                    <strong>Ancient Wisdom View:</strong> {archetypeData.vedicInsights.view}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {/* Start Doing */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <h4 className="text-sm font-bold text-green-800 mb-2 flex items-center">
                      <span className="mr-2">✅</span>
                      Start Doing
                    </h4>
                    <ul className="space-y-1">
                      {archetypeData.vedicInsights.startDoing.slice(0, 5).map((item, index) => (
                        <li key={index} className="text-xs text-green-700 flex items-start">
                          <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stop Doing */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <h4 className="text-sm font-bold text-red-800 mb-2 flex items-center">
                      <span className="mr-2">❌</span>
                      Stop Doing
                    </h4>
                    <ul className="space-y-1">
                      {archetypeData.vedicInsights.stopDoing.slice(0, 5).map((item, index) => (
                        <li key={index} className="text-xs text-red-700 flex items-start">
                          <span className="text-red-500 mr-2 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shadow Work */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader className="pb-3 px-4 pt-4">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                  <span>Shadow Integration Work</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-gray-700 leading-relaxed text-sm">{archetypeData.shadows}</p>
              </CardContent>
            </Card>

            {/* Healing Practices */}
            <Card className="border-rose-200 bg-rose-50">
              <CardHeader className="pb-3 px-4 pt-4">
                <CardTitle className="text-base sm:text-lg">🧘 Healing & Growth Practices</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-gray-700 leading-relaxed text-sm">{archetypeData.healingPractices}</p>
              </CardContent>
            </Card>

            {/* Call to Action after Vedic */}
            <CallToActionCard />
          </TabsContent>

          {/* Get Personal Reading Tab */}
          <TabsContent value="reading" className="space-y-4 mt-4">
            {/* Main Call to Action */}
            <Card className="border-4 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
              <CardContent className="text-center py-6 sm:py-8 space-y-4 sm:space-y-6 px-4">
                <div className="text-4xl sm:text-6xl mb-4">✨</div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-4">Ready to Go Deeper?</h2>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4 sm:mb-6">
                  Get personalized answers to your most pressing questions about love, career, purpose, and personal growth.
                </p>
                
                <div className="bg-white/70 rounded-2xl p-4 sm:p-6 border-2 border-purple-200">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-purple-800">Ask Your First Question FREE</h3>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg max-w-xs touch-manipulation"
                    >
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Get My FREE Personal Reading
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-purple-700 font-medium">
                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <span className="text-xl sm:text-2xl">💜</span>
                      <span>Love & Relationships</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <span className="text-xl sm:text-2xl">🎯</span>
                      <span>Career & Money</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <span className="text-xl sm:text-2xl">🌟</span>
                      <span>Life Purpose</span>
                    </div>
                  </div>
                </div>

                {/* What You'll Get */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-3 sm:p-4 border border-indigo-200">
                  <h4 className="text-base sm:text-lg font-bold text-indigo-900 mb-3">What You'll Get:</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-indigo-800">
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">✓</span>
                      <span>Personalized answers to your specific questions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">✓</span>
                      <span>Deeper insights into your {profile.archetype} nature</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">✓</span>
                      <span>Guidance for your next life steps</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">✓</span>
                      <span>No commitment - first question is completely free</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
};

export default MobileAstrologyReport;
