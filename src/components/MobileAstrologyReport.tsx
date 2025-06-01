
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, MapPin, Clock, Star, Brain, Target, Heart, Zap, Shield, Users, Lightbulb, Briefcase, MessageCircle } from "lucide-react";
import { getArchetypeData, calculateArchetypeFromChart } from '@/data/archetypeData';

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
  const [activeTab, setActiveTab] = useState("overview");

  // Generate psychological profile based on birth data patterns
  const generatePsychologicalProfile = () => {
    const birthDate = new Date(formData.dateOfBirth);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    
    // Psychological personality patterns based on birth timing
    const getPersonalityPattern = (month: number, day: number) => {
      if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return { name: "The Achiever", trait: "Goal-oriented", tendency: "Structured thinking" };
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return { name: "The Innovator", trait: "Forward-thinking", tendency: "Independent mindset" };
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return { name: "The Intuitive", trait: "Empathetic", tendency: "Emotional intelligence" };
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return { name: "The Pioneer", trait: "Action-oriented", tendency: "Leadership drive" };
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return { name: "The Builder", trait: "Practical", tendency: "Steady persistence" };
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return { name: "The Communicator", trait: "Adaptable", tendency: "Quick learning" };
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return { name: "The Nurturer", trait: "Caring", tendency: "Protective instincts" };
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return { name: "The Creator", trait: "Confident", tendency: "Self-expression drive" };
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return { name: "The Analyzer", trait: "Detail-oriented", tendency: "Systematic approach" };
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return { name: "The Harmonizer", trait: "Balanced", tendency: "Relationship focus" };
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return { name: "The Transformer", trait: "Intense", tendency: "Deep thinking" };
      } else {
        return { name: "The Explorer", trait: "Optimistic", tendency: "Growth mindset" };
      }
    };

    const corePersonality = getPersonalityPattern(month, day);

    // Generate secondary psychological patterns
    const personalityTypes = ["Achiever", "Innovator", "Intuitive", "Pioneer", "Builder", "Communicator", "Nurturer", "Creator", "Analyzer", "Harmonizer", "Transformer", "Explorer"];
    const timeHour = parseInt(formData.timeOfBirth.split(':')[0]);
    const emotionalStyle = personalityTypes[(timeHour + day) % 12];
    const behaviorPattern = personalityTypes[(timeHour * 2 + month) % 12];
    
    // Generate dominant psychological drivers
    const motivationalDrivers = ["Achievement", "Innovation", "Connection", "Independence", "Security", "Growth"];
    const primaryDriver = motivationalDrivers[timeHour % 6];
    const cognitiveStyle = ["Analytical", "Intuitive", "Practical"][timeHour % 3];
    const energyType = ["High-energy", "Steady-energy", "Reflective-energy"][(day + month) % 3];

    // Calculate archetype using psychological mapping
    const archetypeResult = calculateArchetypeFromChart(
      corePersonality.name,
      emotionalStyle,
      behaviorPattern,
      primaryDriver,
      cognitiveStyle,
      energyType
    );

    return {
      corePersonality,
      emotionalStyle,
      behaviorPattern,
      primaryDriver,
      cognitiveStyle,
      energyType,
      archetype: archetypeResult.primary,
      secondaryArchetype: archetypeResult.secondary,
      scoreBreakdown: archetypeResult.scoreBreakdown
    };
  };

  const profile = generatePsychologicalProfile();
  const archetypeData = getArchetypeData(profile.archetype);

  // Get archetype emoji
  const getArchetypeEmoji = (archetype: string) => {
    const emojiMap: Record<string, string> = {
      "The Builder": "🛠️",
      "The Dreamer": "🌙", 
      "The Leader": "🔥",
      "The Healer": "🌿",
      "The Seeker": "🧭",
      "The Rebel": "⚡",
      "The Mystic": "🔮",
      "The Visionary": "🌈",
      "The Connector": "🤝",
      "The Strategist": "🧠",
      "The Performer": "🎭",
      "The Alchemist": "🦂"
    };
    return emojiMap[archetype] || "🌟";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <Button 
            onClick={onBack}
            size="sm"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-3 py-2"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <h1 className="text-lg font-bold text-gray-900 truncate">KarmaArchetype Report</h1>
          <div className="w-16"></div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Personal Info Card */}
        <Card className="border-orange-200">
          <CardContent className="p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-3 text-center">{formData.name}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-600">Birth Date</span>
                </div>
                <span className="font-medium">{formData.dateOfBirth}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-600">Birth Time</span>
                </div>
                <span className="font-medium">{formData.timeOfBirth}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-600">Birth Place</span>
                </div>
                <span className="font-medium text-right">{formData.placeOfBirth}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Mobile Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 h-auto p-1">
            <TabsTrigger value="overview" className="text-xs py-2 px-1">
              <div className="flex flex-col items-center space-y-1">
                <Star className="h-4 w-4" />
                <span>Overview</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="insights" className="text-xs py-2 px-1">
              <div className="flex flex-col items-center space-y-1">
                <Brain className="h-4 w-4" />
                <span>Insights</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="growth" className="text-xs py-2 px-1">
              <div className="flex flex-col items-center space-y-1">
                <Target className="h-4 w-4" />
                <span>Growth</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="life" className="text-xs py-2 px-1">
              <div className="flex flex-col items-center space-y-1">
                <Heart className="h-4 w-4" />
                <span>Life</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="action" className="text-xs py-2 px-1">
              <div className="flex flex-col items-center space-y-1">
                <Zap className="h-4 w-4" />
                <span>Action</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4 mt-4">
            {/* Main Archetype */}
            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="text-center p-6">
                <div className="text-5xl mb-3">{getArchetypeEmoji(profile.archetype)}</div>
                <h2 className="text-xl font-bold text-orange-800 mb-2">Your Primary KarmaArchetype</h2>
                <div className="text-2xl font-bold text-orange-900 mb-3">{profile.archetype}</div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Based on your psychological analysis, you embody the essence of <strong>{profile.archetype}</strong>.
                </p>
                <div className="bg-white/50 rounded-lg p-3 mt-4">
                  <p className="text-sm text-gray-600">
                    💫 Your secondary archetype is <strong>{profile.secondaryArchetype}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Life Purpose */}
            <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Heart className="h-5 w-5 text-blue-600" />
                  <span>Your Life Purpose</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 leading-relaxed text-sm">{archetypeData.lifePurpose}</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-4 mt-4">
            {/* Core Patterns */}
            <Card className="border-orange-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">🧠 Core Psychological Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Core Personality Type</h4>
                  <p className="text-lg font-bold text-orange-600">{profile.corePersonality.name}</p>
                  <p className="text-xs text-gray-600">{profile.corePersonality.trait} • {profile.corePersonality.tendency}</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Emotional Processing</h4>
                  <p className="text-lg font-bold text-orange-600">{profile.emotionalStyle}</p>
                  <p className="text-xs text-gray-600">How you handle emotions internally</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Behavior Pattern</h4>
                  <p className="text-lg font-bold text-orange-600">{profile.behaviorPattern}</p>
                  <p className="text-xs text-gray-600">Your external action style</p>
                </div>
              </CardContent>
            </Card>

            {/* Psychological Drivers */}
            <Card className="border-red-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">🎯 Psychological Drivers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Primary Motivation</h4>
                  <p className="text-lg font-bold text-red-600">{profile.primaryDriver}</p>
                  <p className="text-xs text-gray-600">What drives your decisions</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Cognitive Style</h4>
                  <p className="text-lg font-bold text-red-600">{profile.cognitiveStyle}</p>
                  <p className="text-xs text-gray-600">How you process information</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Energy Type</h4>
                  <p className="text-lg font-bold text-red-600">{profile.energyType}</p>
                  <p className="text-xs text-gray-600">Your natural energy rhythm</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Growth Tab */}
          <TabsContent value="growth" className="space-y-4 mt-4">
            {/* Strengths */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span>Your Natural Superpowers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
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
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Target className="h-5 w-5 text-yellow-600" />
                  <span>Your Growth Edges</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">{archetypeData.growthAreas}</p>
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-xs text-yellow-700 font-medium">
                    💪 Use your {profile.cognitiveStyle.toLowerCase()} approach to transform challenges
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Shadow Work */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span>Shadow Integration Work</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm">{archetypeData.shadows}</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Life Tab */}
          <TabsContent value="life" className="space-y-4 mt-4">
            {/* Relationships */}
            <Card className="border-pink-200 bg-pink-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Users className="h-5 w-5 text-pink-600" />
                  <span>Relationship Patterns</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  In relationships, you likely attract people who complement your {profile.archetype} nature. Your {profile.behaviorPattern} behavior pattern influences how you connect with others.
                </p>
                <div className="bg-white/50 rounded-lg p-3">
                  <p className="text-xs text-pink-700 font-medium">
                    💕 Balance your natural tendencies with conscious relationship choices
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Life Evolution */}
            <Card className="border-indigo-200 bg-indigo-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Lightbulb className="h-5 w-5 text-indigo-600" />
                  <span>Your Life Evolution Path</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm">{archetypeData.lifeStages}</p>
              </CardContent>
            </Card>

            {/* Healing Practices */}
            <Card className="border-rose-200 bg-rose-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">🧘 Healing & Growth Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm">{archetypeData.healingPractices}</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Action Tab */}
          <TabsContent value="action" className="space-y-4 mt-4">
            {/* Career Paths */}
            <Card className="border-orange-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                  <span>Aligned Career Paths</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
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

            {/* Vedic Insights */}
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">🕉️ Wisdom Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                      {archetypeData.vedicInsights.startDoing.slice(0, 3).map((item, index) => (
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
                      {archetypeData.vedicInsights.stopDoing.slice(0, 3).map((item, index) => (
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

            {/* Call to Action */}
            <Card className="border-4 border-gradient-to-r from-purple-400 to-pink-400 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
              <CardContent className="text-center py-6 space-y-4">
                <div className="text-4xl mb-3">✨</div>
                <h2 className="text-xl font-bold text-purple-900 mb-3">Ready to Go Deeper?</h2>
                <p className="text-sm text-gray-800 leading-relaxed mb-4">
                  Get personalized answers to your most pressing questions about love, career, purpose, and personal growth.
                </p>
                
                <div className="bg-white/70 rounded-2xl p-4 border-2 border-purple-200">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    <h3 className="text-base font-bold text-purple-800">Ask Your First Question FREE</h3>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 text-sm rounded-xl"
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Get My FREE Personal Reading
                  </Button>
                  
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
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MobileAstrologyReport;
